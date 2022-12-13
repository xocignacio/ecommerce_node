import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars'; 
import __dirname from './utils.js';                                ////  __dirname (normbro la ruta absoluta para las vistas en handlebars)
import viewsRouter from './routes/views.router.js';                //// rutas de las vistas
import sessionsRouter from './routes/session.router.js';           //// rutas de register con datos que saco de models users
import MongoStore from 'connect-mongo';
import session from 'express-session';
import passport from 'passport';
import initializePassport from './src/config/passport.config.js';
import minimist from 'minimist';
import { MongoDBService } from './src/MongoDBService/index.js';
import { config } from './src/config/index.js';
import { logger } from './src/Logs/utils.js';
import { productsRouter, cartsRouter } from "./routes/index.js";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './src/graphQL_apollo/typeDefs.js'
import resolvers from './src/graphQL_apollo/resolvers.js';


const app = express();

const server = app.listen(config.server.PORT, () => {
    console.log(`- Server running on port  => ${server.address().port} ✔ `);
  });
  server.on("error", (error) => {
    console.error(`Server error: ${error}`);
  });

MongoDBService.init();

app.use(logger());
  
/////////// Lineas para utilizar handlebars ///////////////////
app.engine('handlebars',handlebars.engine());    
app.set('views',__dirname+'/views');                 ////dirname es la ruta absoluta (utils)
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'))

app.use(session({                      //// middleware de session que se guarde en mongo
  secret:"UnaPalabraSuperDificil",  
  store:MongoStore.create({
        mongoUrl:process.env.MONGO_URL,
        mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
        ttl:3600
    }),    
    resave:false,
    saveUninitialized:false
}))

app.use(config.server.routes.products, productsRouter);
app.use(config.server.routes.carts, cartsRouter);


initializePassport();
app.use(passport.initialize());
app.use(passport.session());

///// IMPORTANTISIMO consultas que ven los clientes ////////
app.use('/',viewsRouter);                       ///// En la ruta raiz, el cliente es el que ve las vistas de las rutas
app.use('/api/sessions',sessionsRouter);        


const args = minimist(process.argv.slice(2),{alias:{m:"MODE",p:"PORT",d:"DEBUG"},default:{m:"prod",p:8080,d:false}});
const {MODE,PORT,DEBUG} = args;
let ObjetoProcess = {
    mode : MODE,
    port : PORT,
    debug: DEBUG,
    others: args._
}
console.log(ObjetoProcess );

console.log(`{correr en modo cluster => pm2 start ./ecosystem.config.cjs}`);

app.get ('/', (req,res)=>{
  res.send ({status: "success", message:"Hola cliente"})
} )

///////////////////////////////// SWAGGER //////////////////////////////////
const swaggerOptions = {
  definition: {
      openapi:'3.0.1',
      info: {
          title:"Bienvenido a la documentacion de mi proyecto",
          description:"Documentacion del funcionamiento de mi app"
      }
  },
  apis:[`${__dirname}/docs/**/*.yaml`]
}

const specs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs',swaggerUiExpress.serve,swaggerUiExpress.setup(specs))
console.log('- Interfaz UI swagger funcionando ✔')

//////////////////////////// GraphQl y apollo ///////////////////////////
const aServer = new ApolloServer({
  typeDefs,
  resolvers,
 
})

await aServer.start();
aServer.applyMiddleware({app})
console.log('- Server apollo funcionando ✔')



