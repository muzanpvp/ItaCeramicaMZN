const sequelize = require('../db/sequelize');
const User = require('../db/models/user');
const Produto = require('../src/models/produto');


// Sincronizar modelos com o banco de dadoss
const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();
