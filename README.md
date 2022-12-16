# ✨Ecommerce cervezas de otra galaxia✨
✨[Deploy app (viejo) con Heroku](https://ecommercenodejsnacho.herokuapp.com/login)✨

![](https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/IMAGEN%20PARA%20GITHUB.JPG?alt=media&token=9691ffe6-7682-4b1e-91a3-92820e453220)
## Conceptos
- Express para levantar servidores y utilizar routers
- Utiliza BD mongo atlas
- Schemas de mongoose
- express-session :  permite que una variable sea accesible desde cualquier lugar del sitio. Se almacena del lado del servidor.Se utiliza principalmente para guardar los datos de usuario al iniciar sesión.
- contraseñas hasheadas con bcrypt 
- persistencia userService from '../../models/Users.js
- Motor de plantilla handlebars
- Variables de entorno manejadas con dotenv 
- utilizo pm2 un process manager que simplifica la app para ejecutarla como cluster
- Logs realizados con libreria winston (log inicio sesion) registra actividad de la aplicacion => soporte para multiples transportes. Al ejecutar el logger, genera un    archivo de log cuando alguien visita el home
- Passport middleware de auntentificacion de sesion
- Heroku: Es una plataforma en la nube que ofrece servicio para alojar e implementar aplicaciones web en varios lenguajes de programación, como Node.js, entre otros.
- Testeo de funcionalidades y servidor (Programamos un cliente para que haga una peticiona  nuestro mismo servidor)
- Documentacion con swagger

## ARTILLERY 
> Artillery es una libreria nativa de node, para realizar pruebas de carga, simula procesos, como numeros de usuarios y peticiones que buscan comprobar el comprotamiento del server bajo ESTRES
- Comando de consola para prueba de carga => 
 ```sh
  artillery quick --count 50 -n 40 http://localhost:8080?max=10000 > resultFork.txt

```
 
(simula 50 usuarios que envian 40 peticiones) y genera un archivo que puedo nombrar como quiera con toda la estadistica 
- Sin profiling mide que tanta carga soporta el servidor y cuanto tarda en procesarlo
- Server corriendo en modo fork en localhost8080 aunque puedo pasar por argumento otra direccion como 8081 y el metodo CLUSTER para tener 2 diferentes servers y comparar sus rendimientos bajo una prueba de estres

```sh
  src_artillery/app.js => funcion de numeros primos para evaluar con artillery su comportamiento en modo fork y se puede pasar por argumento modo cluster

```
## Test
> testeo modulos a nivel backend. Hay 2 formas de realizar solicitud http en node atraves de  clientes http:
- Internos: modulo http estandar  que viene en la libreria de node 
- Externos  Paquetes npm como axios o got 

>Testeo servidores
- realizamos una peticion a un endpoint
- MOCHA y CHAI => framework de prueba para javascript que se ejecuta en node, Realiza pruebas TDD
 ```sh
  npm run testApi

```

## Documentacion 
- Mantiene claros los puntos importantes de nuestra API, metodos y endpoint 
- Generar  un modelo de documentacion claro y de como funciona algo que implementamos es muy importante para poder trabajar en equipo
- Swagger es un framework de documentacion https://swagger.io/  herramienta extremadamente útil para describir, producir, consumir y visualizar APIs RESTful. Es multiplataforma.
- Proporciona una interfaz web gráfica a modo de sandbox donde podemos testear los endpoints API a la vez que estamos consultando la documentación. 
 > [Ver documentacion](http://localhost:8080/api-docs/)



## Framework
-  [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.

## Estilado
- Css puro 
- animate.css (Efecto animado letras)
- fontawesome (Icons)

Dependencias y librerias

```sh
  "animate.css": "^4.1.1",
    "apollo-server-express": "^3.11.1",
    "bcrypt": "^5.0.1",
    "connect-mongo": "^4.6.0",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "express-handlebars": "^6.0.6",
    "express-session": "^1.17.3",
    "graphql": "^16.6.0",
    "joi": "^17.6.3",
    "jsonwebtoken": "^8.5.1",
    "minimist": "^1.2.6",
    "mongoose": "^6.6.1",
    "nodemon": "^2.0.19",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "swagger-jsdoc": "^6.2.5",
    "swagger-ui-express": "^4.6.0",
    "winston": "^3.8.2"
  },
  "devDependencies": {
    "chai": "^4.3.7",
    "mocha": "^10.1.0",
    "supertest": "^6.3.1"


```
