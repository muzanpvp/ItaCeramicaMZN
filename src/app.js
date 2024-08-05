const express = require('express');
const path = require('path');
const server = require('serverless-http');
//const context = require('../db/db-context');

const app= express();
const router = express.Router();

router.get('/',(req,res)=>{
  const data = {
    nome: 'Layane',
    idade: 21
  };
  res.json(data);
});

const handler = server(app);

app.use('/.netlify/functions/app', router);

module.exports.handler = server(app);