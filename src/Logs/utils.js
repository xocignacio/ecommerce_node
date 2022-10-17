import winston from 'winston';

export const debugLogger = winston.createLogger({
    transports:[
        new winston.transports.File({level:'debug',filename:'Inicio_de_sesion_succes.log'}),  /// se guarda todo lo que tenga que ver con la operacion que realizo por url 
        new winston.transports.File({level:'error',filename:'errors.log'})
    ]
});

///////////////////Middlewares que exporto para utilizarlo ///////////////////
export const logger = () => (req,res,next) =>{
    req.logger = debugLogger;
    next();
}