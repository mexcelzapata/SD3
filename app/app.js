const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'PGSQL',
      port : 5432,
      user : 'postgres',
      password : 'postgres',
      database : 'postgres'
    }
  });

app.get('/GetProduct/:nombre', async (req, res) => {
    //const query = await slate.query("SELECT * FROM productos WHERE nombre=$1",[req.params.nombre]);
    const nom = `%${req.params.nombre}%` 
    knex('productos').where('nombre', 'like', nom).then(data=>{res.send(data)});
    

    console.log("probandoando GetProduct ")
    //res.send(query.rows)
});

app.post('/AddProduct', async (req, res) => {
    console.log("probandoando AddProduct")
    knex('productos').returning('*').insert({nombre:req.body.nombre, precio:req.body.precio }).then(data=>{res.send(data)});
    res.send("Se inserto con exito")
});

app.listen(port, () => {
  console.log("ON")
});