# Description
Rest api developed in Node.js, having as elements an express server and access to different endpoints that point to the BSALE database

# EndPoints

1- /products

2- /products_bycategory/:category
    !ej: /products_bycategory/4
    
3- /products/:num1/:num2
    !ej: /products/0/8
    
4- /products_bycategory/:category/:num1/:num2
    !ej: /products_bycategory/:category/0/8
    
5- /products_byname/:nameCat
    !ej: /products_byname/energetica
    

