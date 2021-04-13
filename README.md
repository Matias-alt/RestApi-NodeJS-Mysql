# Rest Api BSALE
Prueba la api rest -> https://restapi-nodejs-msql.herokuapp.com/products

# Description

Esta rest api fue desarrollada en Node.JS version v14.15.4, opte por elegir este entorno de desarrollo ya que tenia cierta experiencia, ademas de ser relativamente sencillo de desarrollar. Para montar el servidor que se encargara de recibir las peticiones http, se utilizó "express" en su version 4.17.1. Para realizar la conexion a la base de datos
BSALE se utilizo el modulo "mysql" en su version 2.18.1. La conexion a la base de datos se encuentra en el archivo database.js que posteriormente es exportada para ser utilizada 
en los distintos endpoints. Tambien se utilizo el modulo "cors" en su verison 2.8.5 para permitir el acceso al origen indicado, en este caso, la aplicacion cliente que consume esta rest api https://gallant-villani-227bfe.netlify.app/. Por ultimo se utilizo una dependencia de desarrollo, "nodemon" en su version 2.0.7, permitiendo recargar el servidor de forma inmediata, de esta manera se agilizo bastante el desarrollo.

En el archivo index.js se definen unas secciones basicas para el correcto funcionamiento, tales como Cors, Settings, Middleware Y Routes

Al comienzo se define una variable app que requiere y ejecuta las funcionalidades de "express", esta variable sera utilizada a lo largo de todo el flujo de la rest api.
Luego, en la seccion ***"Cors"*** se especifica la url a la cual se le dara acceso para ocupar las funcionalidades de los diversos endpoints. En la seccion ***"Settings"*** se define el puerto en donde estara escuchando el servidor express, de manera predeterminada se utilizo el puerto 3000. En la seccion ***"Middlewares"*** se le da la opcion al servidor express de ocupar el formato json para enviar y recibir datos. Finalmente en la seccion ***"Routes"***, se llama al archivo Routes/products.js que contiene los diversos endpoints definidos en esta rest api.

# EndPoints

1- /products <br/>
este endpoint trae todos los registros de la tabla products

2- /products_bycategory/:category | ***ej: /products_bycategory/4*** <br/>
Este endpoint trae todos los productos filtrados por categoría. el parámetro debe estar entre 1 y 7
    
3- /products_byname/:nameCat | ***ej: /products_byname/energetica*** <br/>
este endpoint traerá todos los productos filtrados por nombre de producto


los siguientes endpoints realizan las mismas acciones que los endpoint anteriores, pero en este caso, se le agregan nuevos parametros que iran como valor de la clausula LIMIT del lenguaje SQL. Estos valoren son de suma importancia para que la aplicacion cliente pueda crear el paginador de productos de manera dinamica. <br/>

4- /products/:num1/:num2 | ***ej: /products/0/8***
    
5- /products_bycategory/:category/:num1/:num2 | ***ej: /products_bycategory/:category/0/8***

6- /products_byname/:nameCat/:num1/:num2 | ***ej: /products_byname/:nameCat/0/8***
    

    

