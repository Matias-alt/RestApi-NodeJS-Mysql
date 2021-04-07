# Description
Rest api developed in Node.js, having as elements an express server and access to different endpoints that point to the BSALE database

# EndPoints

1- /products
this endpoint will bring all the products from the database

2- /products_bycategory/:category | ***ej: /products_bycategory/4***
This endpoint will bring all the products filtered by category. the parameter must be between 1 and 7
    
3- /products_byname/:nameCat | ***ej: /products_byname/energetica***
this endpoint will bring all the products filtered by product name



the following endpoints bring the products the same as the previous endpoints, but with a product limiter

4- /products/:num1/:num2 | ***ej: /products/0/8***
    
5- /products_bycategory/:category/:num1/:num2 | ***ej: /products_bycategory/:category/0/8***

6- /products_byname/:nameCat/:num1/:num2 | ***ej: /products_byname/:nameCat/0/8***
    

    

