/*
==============================
|   CONEXION BASE DE DATOS   |
==============================
*/

//Se utiliza el modulo 'sql'
const mysql = require('mysql');

//Definicion de los parametros correspondiente a la base de datos BSALE
const mysqlConnection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error connecting to database: ", err);
    }
    else{
        console.log("Database connection successful");
    }
});

module.exports = mysqlConnection;