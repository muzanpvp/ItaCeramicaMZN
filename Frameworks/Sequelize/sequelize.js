// db/sequelize.js
const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Configuração do Sequelize
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'mysql'
});

// Sincronizar modelos com o banco de dados
sequelize.sync();

module.exports = { sequelize, User };
