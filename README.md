# ✨Ecommerce con node ✨
##  correr proyecto =>  nodemon app.js 



## Conceptos
- Utiliza BD mongo atlas
- contraseñas hasheadas 
- persistencia userService from '../../models/Users.js
- Motor de plantilla hb
- Variables de entorno manejadas con dotenv 
- Logs realizados con libreria winston (log inicio sesion) registra actividad de la aplicacion => soporte para multiples transportes. Al ejecutar el logger, genera un archivo de log cuando alguien visita el home

## rutas
- http://localhost:8080/register
- http://localhost:8080/login
- http://localhost:8080/


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

Dependencias y librerias

```sh
    "bcrypt": "^5.0.1",
    "connect-mongo": "^4.6.0",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "express-handlebars": "^6.0.6",
    "express-session": "^1.17.3",
    "minimist": "^1.2.6",
    "mongoose": "^6.6.1",
    "nodemon": "^2.0.19",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0"
    - Winston: npm install winston
     - Artillery: npm install -g artillery


```
