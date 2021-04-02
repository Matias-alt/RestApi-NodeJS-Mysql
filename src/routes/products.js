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

router.get('/products/:id', (req, res) =>{

    const { id } = req.params;

    mysqlConnection.query('SELECT * FROM bsale_test.product WHERE id = ?', [id], (err, rows, fields) =>{
        
        if(!err){
            res.json(rows);
        }
        else{
            console.log("Error query: ", err);
        }          
    });
});

router.get('/products_bycategory/:category', (req, res) =>{

    const { category } = req.params;

    mysqlConnection.query('SELECT * FROM bsale_test.product WHERE category = ?', [category], (err, rows, fields) =>{
        
        if(!err){
            res.json(rows);
        }
        else{
            console.log("Error query: ", err);
        }          
    });
    
});


module.exports = router;