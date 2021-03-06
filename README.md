# Rest Api BSALE
Prueba la api rest -> https://restapi-nodejs-msql.herokuapp.com/products

# Description

Esta rest api fue desarrollada en Node.JS version v14.15.4, opte por elegir este entorno de desarrollo ya que tenia cierta experiencia, ademas de ser relativamente sencillo de desarrollar. <br/>

### Dependencias

#### Express
Para montar el servidor que se encargara de recibir las peticiones http, se utilizó ***"express"*** en su version 4.17.1. <br/>

#### Mysql
Para realizar la conexion a la base de datos BSALE se utilizo el modulo ***"mysql"*** en su version 2.18.1. La conexion a la base de datos se encuentra en el archivo database.js que posteriormente es exportada para ser utilizada en los distintos endpoints. <br/>

#### Cors
Tambien se utilizo el modulo ***"cors"*** en su verison 2.8.5 para permitir el acceso al origen indicado, en este caso, la aplicacion cliente que consume esta rest api https://gallant-villani-227bfe.netlify.app/. <br/>

#### Nodemon
Se utilizo una dependencia de desarrollo, ***"nodemon"*** en su version 2.0.7, permitiendo recargar el servidor de forma inmediata, de esta manera se agilizo bastante el desarrollo.

#### Sql-injection
Se utilizo el modulo ***"sql-injection"*** en su version 0.0.6 para evitar las inyecciones SQL. Este módulo detecta los ataques de inyección SQL y los detiene enviando 403 como respuesta. El módulo comprueba la cadena de consulta, los parámetros de ruta y el cuerpo en busca de contenido relacionado con la inyección SQL.
<br/>
### Desarrollo 
En el archivo index.js se definen unas secciones basicas para el correcto funcionamiento, tales como Cors, Settings, Middleware Y Routes

Al comienzo se define una variable app que requiere y ejecuta las funcionalidades de "express", esta variable sera utilizada a lo largo de todo el flujo de la rest api.
Luego, en la seccion ***"Cors"*** se especifica la url a la cual se le dara acceso para ocupar las funcionalidades de los diversos endpoints. En la seccion ***"Settings"*** se define el puerto en donde estara escuchando el servidor express, de manera predeterminada se utilizo el puerto 3000. En la seccion ***"Middlewares"*** se le da la opcion al servidor express de ocupar el formato json para enviar y recibir datos. Finalmente en la seccion ***"Routes"***, se llama al archivo Routes/products.js que contiene los diversos endpoints definidos en esta rest api.

Las rutas tienen la capacidad de identificar si los parametros ingresados en algun endpoint especifico, es correcto o no. Por ejemplo el endpoint n°2 recibe como parametro un numero del 1 al 7, que corresponde al id de categoria a buscar. Si el parametro ingresado no esta en este rango de numeros o se ingresa una palabra, aparecera un mensaje en la consola que indica el error especifico. Me gustaria hacer una observacion con el feedback entregado, en donde se señala que no se estaba cumpliendo con la inyeccion SQL. Segun informacion que pude encontrar, al utilizar valores incognitos ("?") en la consulta SQL, se evita la inyeccion SQL. Esto es lo que pude investigar y probar por mi cuenta, obviamente lo digo desde mi ignoracia en este tema en particular, ustedes como equipo tecnico son los que saben mucho mas sobre esto.

# EndPoints

## 1- /products <br/>
este endpoint trae todos los registros de la tabla products

```
OUTPUT:

[
   {
      id: 5,
      name: "ENERGETICA MR BIG",
      url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
      price: 1490,
      discount: 20,
      category: 1
  },
  {
      id: 6,
      name: "ENERGETICA RED BULL",
      url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
      price: 1490,
      discount: 0,
      category: 1
  },
  {
      id: 7,
      name: "ENERGETICA SCORE",
      url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
      price: 1290,
      discount: 0,
      category: 1
  },
  
  ....... 
]
```

## 2- /products_bycategory/:category <br/>
Este endpoint trae todos los productos filtrados por categoría. el parámetro debe estar entre 1 y 7 <br/>

```
- categoría 1 : energetica 
- categoría 2 : pisco 
- categoría 3 : ron 
- categoría 4 : bebida  
- categoría 5 : snack 
- categoría 6 : cerveza 
- categoría 7 : vodka 
```


### ej: /products_bycategory/5 <br/>
```
OUTPUT:

[
  {
      id: 47,
      name: "Maní salado"
      url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg",
      price: 600,
      discount: 0,
      category: 5
  }, 
  
  ....... 
]
```


## 3- /products_byname/:nameCat 
este endpoint traerá todos los productos filtrados por nombre de producto

### ej: /products_byname/mistral <br/>
```
OUTPUT:

[
   {
      id: 19,
      name: "PISCO MISTRAL 35º",
      url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral359200.jpg",
      price: 4990,
      discount: 20,
      category: 2
   },
   {
      id: 20,
      name: "PISCO MISTRAL 40º ",
      url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral409215.jpg",
      price: 4990,
      discount: 20,
      category: 2
   },
   {
      id: 87,
      name: "PISCO MISTRAL 35°",
      url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/358978.jpg",
      price: 4990,
      discount: 0,
      category: 2
   },
  
  ....... 
]
```

<br/>
<br/>
los siguientes endpoints realizan las mismas acciones que los endpoint anteriores, pero en este caso, se le agregan nuevos parametros que iran como valor de la clausula LIMIT del lenguaje SQL. Estos valoren son importantes para que la aplicacion cliente pueda crear el paginador de productos de manera dinamica. <br/>

## 4- /products/:num1/:num2 
Si quisieras buscar todos los productos pero con un limite de 15 productos, partiendo desde el primer prodcuto encontrado, el endpoint quedaria de la siguiente forma
#### ej: /products/0/15 

<br/>

## 5- /products_bycategory/:category/:num1/:num2
Si quisieras buscar todos los productos de la categoria 2 (pisco), con un limite de 8 productos, partiendo desde el tercer producto, el endpoint quedaria de la siguiente forma
#### ej: /products_bycategory/2/3/8

<br/>

## 6- /products_byname/:nameCat/:num1/:num2 
Si quisieras buscar todos los productos que contengan en su nombre la palabra "sprite", con un limite de 2 productos, partiendo desde el primer producto, el endpoint quedaria de la siguiente forma
#### ej: /products_byname/sprite/0/2

<br/>







    

    

