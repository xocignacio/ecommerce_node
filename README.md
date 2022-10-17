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
