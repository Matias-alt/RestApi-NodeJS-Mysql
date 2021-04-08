const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');


//routes definition
router.get('/products', (req, res) =>{

    mysqlConnection.query('SELECT * FROM bsale_test.product', (err, rows) =>{
        
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

    mysqlConnection.query('SELECT * FROM bsale_test.product WHERE category = ?', [category], (err, rows) =>{
        
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

    mysqlConnection.query("SELECT * FROM bsale_test.product WHERE name LIKE ?", ['%'+nameCat+'%'], (err, rows) =>{
        
        if(!err){
            res.json(rows);
        }
        else{
            console.log("Error query: ", err);
        }          
    });
    
});

//this endpoint receives 2 additional parameters that allow to create the pager
router.get('/products/:num1/:num2', (req, res) =>{

    const { num1, num2 } = req.params;
    const init = parseInt(num1, 10);
    const limit = parseInt(num2, 10);

    mysqlConnection.query('SELECT * FROM bsale_test.product LIMIT ?,?', [init, limit], (err, rows) =>{
        
        if(!err){
            res.json(rows);
        }
        else{
            console.log("Error query: ", err);
        }          
    });
});

//this endpoint receives 2 additional parameters that allow to create the pager
router.get('/products_bycategory/:category/:num1/:num2', (req, res) =>{

    const { category, num1, num2 } = req.params;
    const init = parseInt(num1, 10);
    const limit = parseInt(num2, 10);

    mysqlConnection.query('SELECT * FROM bsale_test.product WHERE category = ? LIMIT ?,?', [category, init, limit], (err, rows) =>{
        
        if(!err){
            res.json(rows);
        }
        else{
            console.log("Error query: ", err);
        }          
    });
    
});

//this endpoint receives 2 additional parameters that allow to create the pager
router.get('/products_byname/:nameCat/:num1/:num2', (req, res) =>{

    const { nameCat, num1, num2 } = req.params;
    const init = parseInt(num1, 10);
    const limit = parseInt(num2, 10);

    mysqlConnection.query("SELECT * FROM bsale_test.product WHERE name LIKE ? LIMIT ?,?", ['%'+nameCat+'%', init, limit], (err, rows) =>{
        
        if(!err){
            res.json(rows);
        }
        else{
            console.log("Error query: ", err);
        }          
    });
    
});

module.exports = router;