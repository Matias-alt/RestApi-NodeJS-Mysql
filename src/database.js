//Database connection

const mysql = require('mysql');

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