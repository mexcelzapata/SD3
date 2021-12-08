# 🤑👽 SD3 😎🤨
Amezon una empresa de e-commerce, está teniendo problemas de escalabilidad en sus servidores y bases de datos, estos no dan abasto a la creciente cantidad de requests que llegan a cada minuto. Ante esto la solución propuesta es implementar un balanceador de carga para cada replica de la API, como así mismo implementar un esquema de replica master slave para la base de datos sql, de forma que en la base de datos master se hacen los update, insert y delete, mientras que en la base de datos replicada se hacen las consultas select.

Para ello, en este repositorio, se tiene lo utilizado para dar respuesta a la problematica planteada. 

## Levantamiento de Docker 🏗🏗👷‍♀️👷‍♂️
Para poder comenzar, es necesario instalar el entorno con los diferentes contenedores y sus imagenes correspondientes. Donde tenemos que para el balanceador de carga se utilizó `NGINX`, levantado en el puerto por default `3000:80` y como base de datos se utilizó `POSTGRESQL` levantado en el puerto por Default `5432`. Para ejecutar el documento `docker-compose.yml`

```
 docker-compose up -d --build
```

## Rutas 🥶🥵🥵
Una vez levantado los diferentes contenedores, se procede a mencionar las diferentes rutas que se tienen que utilizar para crear un producto como para ver los productos que nosotros requerimios.

### localhost:4000/AddProduct🐱‍🏍➕💲
Para Poder agregar un producto, solo es necesario dirigirnos a la ruta `localhost:4000/AddProduct` e introducir a traves de una herramienta para realizar pruebas a API como lo es `INSOMNIA`, introducimos por metodo `POST` el producto con la siguente estructura de `JSON`:

```json
{
  "nombre": "nombre-producto",
  "precio": 6969
}

```

Para validar aquella insercción dentro de la base de datos, se obtiene como Output: `Se inserto con exito`


### localhost:4000/GetProduct/*Nombre 🔎🔎🧐🧐

Para solicitar a la base de datos los datos de los productos que contienen caracteres determinados, solo basta con introducir el valor de esos caracteres a buscar en la ruta con el metodo `GET` en `localhost:4000/GetProduct/*nombre_producto`. Obteniendo como Output, un listado con los diferentes productos en el sistema de base de datos que coinciden.

Ejemplo: localhost:4000/GetProduct/soldadora

```JSON
[
 {
  "id":43,
  "nombre": "soldadora electrica",
  "precio": 1234
 },
 {
  "id":45,
  "nombre": "soldadora diesel",
  "precio": 4321
 }

]


```













