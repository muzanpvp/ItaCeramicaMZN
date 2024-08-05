const Express = require('express');
const path = require('path');
const ServerlessHttp = require('serverless-http');
const server = require('serverless-http');
//const context = require('../db/db-context');

const app= Express();
const port = 5500;

// Configurar o diretório de views e o motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views/Home'));

app.get('/',(req,res)=>{
  res.render('home');
})

const handler = serverless(app);

app.listen(port,()=>{
  console.log('Servidor está rodando!');
})