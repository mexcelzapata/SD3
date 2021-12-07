const express = require("express");
const app = express();
const port = 4000;
const Pool = require('pg').Pool;

app.use(express.json());

const master = new Pool({
    user: "postgres",
    password: "postgres",
    host: "PGSQL",
    port: 5432,
    database: "postgres"
})
const slate = new Pool({
    user: "postgres",
    password: "postgres",
    host: "PGSQL_slave",
    port: 5432,
    database: "postgres"
})

app.get('/GetProduct/:nombre', async (req, res) => {
    const query = await slate.query("SELECT * FROM productos WHERE nombre=$1",[req.params.nombre]);
    console.log("probandoando GetProduct")
    res.send(query.rows)
});

app.post('/AddProduct', async (req, res) => {
    console.log("probandoando AddProduct")
    await master.query("INSERT INTO productos (nombre, precio) VALUES ($1, $2)",[req.body.nombre,req.body.precio]);
    res.send("Se inserto con exito")
});

app.listen(port, () => {
  console.log("ON")
});