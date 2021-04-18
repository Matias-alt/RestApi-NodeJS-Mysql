const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//Definicion de rutas
router.get('/products', (req, res) =>{

    let query = 'SELECT * FROM bsale_test.product'

    mysqlConnection.query(query, (err, rows) =>{
        
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
    
    if(category > 0 && category <= 7){
        try {

            let query = 'SELECT * FROM bsale_test.product WHERE category = ?'

            mysqlConnection.query(query, [category], (err, rows) =>{
            
                if(!err){
                    res.json(rows);
                }
                else{
                    console.log("Error query: ", err);
                }          
            });
    
        } catch (error) {
            console.log("Error al traer los datos: ", error);
        }
    }
    else{
        console.log("El parametro ingresado debe estar entre el 1 y el 7");
    }  
});

router.get('/products_byname/:nameCat', (req, res) =>{

    const { nameCat } = req.params;

    try {
        let query = "SELECT * FROM bsale_test.product WHERE name LIKE ?"

        mysqlConnection.query(query, ['%'+nameCat+'%'], (err, rows) =>{
        
            if(!err){
                res.json(rows);
            }
            else{
                console.log("Error query: ", err);
            }          
        });

    } catch (error) {
        console.log("Error al traer los datos: ", error);
    }   
});

//this endpoint receives 2 additional parameters that allow to create the pager
router.get('/products/:num1/:num2', (req, res) =>{

    const { num1, num2 } = req.params;

    if(num1 >= 0 && num2 >= 0){
        const init = parseInt(num1, 10);
        const limit = parseInt(num2, 10);

        try {
            let query = 'SELECT * FROM bsale_test.product LIMIT ?,?'

            mysqlConnection.query(query, [init, limit], (err, rows) =>{
            
                if(!err){
                    res.json(rows);
                }
                else{
                    console.log("Error query: ", err);
                }          
            });
        } catch (error) {
            console.log("Error al traer los datos: ", error);
        }
    }
    else{
        console.log("Uno o ambos parametros son incorrectos, deben ser un numero entero");
    }
});

//this endpoint receives 2 additional parameters that allow to create the pager
router.get('/products_bycategory/:category/:num1/:num2', (req, res) =>{

    const { category, num1, num2 } = req.params;
    
    if(category > 0 && category <= 7){
        if(num1 >= 0 && num2 >= 0){
            const init = parseInt(num1, 10);
            const limit = parseInt(num2, 10);

            try {
                let query = 'SELECT * FROM bsale_test.product WHERE category = ? LIMIT ?,?'

                mysqlConnection.query(query, [category, init, limit], (err, rows) =>{
                    
                    if(!err){
                        res.json(rows);
                    }
                    else{
                        console.log("Error query: ", err);
                    }          
                });
            }catch (error) {
                console.log("Error al traer los datos: ", error);
            } 
        }
        else{
            console.log("El segundo o tercer parametro son incorrectos, deben ser un numero entero");
        }
    }
    else{
        console.log("El primer parametro ingresado debe estar entre el 1 y el 7");
    }   
});

//this endpoint receives 2 additional parameters that allow to create the pager
router.get('/products_byname/:nameCat/:num1/:num2', (req, res) =>{

    const { nameCat, num1, num2 } = req.params;

    if(num1 >= 0 && num2 >= 0){

        const init = parseInt(num1, 10);
        const limit = parseInt(num2, 10);

        try {
            let query = "SELECT * FROM bsale_test.product WHERE name LIKE ? LIMIT ?,?"

            mysqlConnection.query(query, ['%'+nameCat+'%', init, limit], (err, rows) =>{
            
                if(!err){
                    res.json(rows);
                }
                else{
                    console.log("Error query: ", err);
                }          
            });
        } catch (error) {
            console.log("Error al traer los datos: ", error);
        }
    }
    else{
        console.log("El segundo o tercer parametro son incorrectos, deben ser un numero entero");
    }   
});

module.exports = router;