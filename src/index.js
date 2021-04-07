const express = require('express');
const app = express();
var cors = require('cors');

//Cors
app.use(cors({origin: 'https://gallant-villani-227bfe.netlify.app'}));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/products'));

app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});
