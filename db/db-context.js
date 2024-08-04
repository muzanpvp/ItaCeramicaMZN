const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'itaceramica'
});

connection.connect(err =>{
    if(err){
        console.error('Erro ao se conectar com o banco de dados', err);
        return;
    }
    console.log('Conexão realizada com sucesso');
});

module.exports=connection;