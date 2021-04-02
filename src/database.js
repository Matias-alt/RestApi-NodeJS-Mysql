const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error al conectarse a base de datos: ", err);
    }
    else{
        console.log("Conexion a la base de datos exitosa");
    }
});

module.exports = mysqlConnection;