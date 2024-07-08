export const Sequelize = require('sequelize');
export const sequelize = new Sequelize('itaceramica','root','123456',{
    host:"localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
console.log("Conectado com o banco de dados!")
}).catch((erro)=>{
console.log("Erro ao tentar conectar no banco de dados!")
})

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}