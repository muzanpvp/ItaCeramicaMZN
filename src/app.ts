const express = require('express'); 
const app = express();
const mysql = require('mysql2');



//Adicionar Bootstrap
app.use('/bootstrap', express.static('../node_modules/bootstrap/dist'))

const context = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'itaceramica'
});

context.connect((erro)=>{
    if(erro) throw erro;
    console.log('<h1>Deu tudo certo</h1>');
});

app.get('/',(req,res)=>{
    res.render('<h1>Hello World</h1>');
});

app.listen('5500');