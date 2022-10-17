/* import express from 'express';
import winston from 'winston';
import { logger } from './utils.js';

const app = express();

app.use(logger());

app.get('/',(req,res)=>{
    req.logger.error("Hola soy un error");
    res.send("Bienvenidos");
})

app.get('/suma/:num1/:num2',(req,res)=>{
    const {num1,num2} = req.params;
    if(!num1||!num2){
        req.logger.error('Insuficient params')
        return res.status(400).send('Insuficient params');
    }
    if(isNaN(num1)||isNaN(num2)){
        req.logger.error('Tipo invalido, ingrese un numero');
        return res.status(400).send('Invalid Types');
    }
    req.logger.verbose('Convirtiendo a number');
    let parsedNumber1 = parseInt(num1);
    let parsedNumber2 = parseInt(num2);
    req.logger.debug('Operando números');
    let result = parsedNumber1 + parsedNumber2;
    req.logger.info(`Operación realizada con resultado ${result}`)
    res.send(`El resultado de la suma es ${result}`)
 })

app.listen(8080,()=>console.log("✔ listening, visit port 8080")) */