const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();
const router = express.Router();

// Configurar o diretório de views e o motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views/Home'));

router.get('/', (req, res) => {
  res.render('home');
});

app.use('/.netlify/functions/server', router);

module.exports.handler = serverless(app);
