# Aula NodeJs 

23/08/2022

- npm init -y para criar um arquivo package.json 
- git init para criar um repositório git

codificado o projeto definindo as dependencias
- servidor web express `$ npm install express`

- criar pasta src e um arquivo index.js e cole o seguinte código
```
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.post("/", function (req, res){
    res.send("Oiie")
})


app.listen(3000)
```

Variáveis constantes tem todas as letras maiusculas 

- servidor web express `$ npm install dotnv`
e importe com o quanto antes (importações normalmente ficam nas primeiras linhas)
```
require('dotenv').config()
```  

A pasta node_modules vem das dependencias instaladas no projeto, não é necesário enviala para o repositório remoto, então crie um arquivo .gitinit para ignorar a pasta, o conteúdo deste arquivo é somente o nome das pastas ou arquivos que serão ignoradas

