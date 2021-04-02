const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/products', (req, res) =>{
    mysqlConnection.query('SELECT * FROM bsale_test.product', (err, rows, fields) =>{
        
        if(!err){
            res.json(rows);
        }
        else{
            console.log("Error query: ", err);
        }          
    });
});



module.exports = router;