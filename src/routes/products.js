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


router.get('/products/:num1/:num2', (req, res) =>{

    const { num1, num2 } = req.params;
    const init = parseInt(num1, 10);
    const limit = parseInt(num2, 10);

    mysqlConnection.query('SELECT * FROM bsale_test.product LIMIT ?,?', [init, limit], (err, rows, fields) =>{
        
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

router.get('/products_byname/:nameCat', (req, res) =>{

    const { nameCat } = req.params;

    mysqlConnection.query("SELECT * FROM bsale_test.product WHERE name LIKE ?", [nameCat+'%'], (err, rows, fields) =>{
        
        if(!err){
            res.json(rows);
        }
        else{
            console.log("Error query: ", err);
        }          
    });
    
});



module.exports = router;