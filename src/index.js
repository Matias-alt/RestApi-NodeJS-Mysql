const express = require('express');
const app = express();
const cors = require('cors');
const sqlinjection = require('sql-injection');

//Cors
app.use(cors({origin: 'https://gallant-villani-227bfe.netlify.app'}));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

/* 
Se agrega un middleware que previene la inyeccion SQL, 
si se detecta una, el servidor retornara una respuesta 403
*/
app.use(sqlinjection);  


//Routes
app.use(require('./routes/products'));

//Iniciacion del servidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});