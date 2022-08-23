const express = require('express')
const app = express()

require('dotenv').config()

// para o express aceitar parametros no formato JSON


// desestrutuação (tira do objeto para variavel)
const {nome, somar} = require("./dados")

app.get('/', function (req, res) {
  res.send(`Hello World ${nome}`)
})

app.post("/oi", function (req, res){
    res.send("Oiie")
})

//não está rodando na PORT 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando em localhost:${PORT} ...`));