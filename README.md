# SD3
Amezon una empresa de e-commerce, está teniendo problemas de escalabilidad en sus servidores y bases de datos, estos no dan abasto a la creciente cantidad de requests que llegan a cada minuto. Ante esto la solución propuesta es implementar un balanceador de carga para cada replica de la API, como así mismo implementar un esquema de replica master slave para la base de datos sql, de forma que en la base de datos master se hacen los update, insert y delete, mientras que en la base de datos replicada se hacen las consultas select.

Para ello, en este repositorio, se tiene lo utilizado para dar respuesta a la problematica planteada. 

## Levantamiento de Docker
Para poder comenzar, es necesario instalar el entorno con los diferentes contenedores y sus imagenes correspondientes. Donde tenemos que para el balanceador de carga se utilizó `NGINX` y como base de datos se utilizó `POSTGRESQL`. Para ejecutar el documento `docker-compose.yml`

```
 docker-compose up -d --build
```
