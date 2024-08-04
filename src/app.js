const Express = require('express');
const context = require('../db/db-context');

const app= Express();
const port = 5500;

// Configurar o diretório de views e o motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views/Home'));

app.get('/',(req,res)=>{
  res.render('home');
})

app.listen(port,()=>{
  console.log('Servidor está rodando!');
})
