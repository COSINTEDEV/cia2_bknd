const { Model } = require('sequelize');
const Sequelize = require('sequelize')

const AuthModel = require('../models/usuario')

const DATABASE = {
  HOST: "192.168.0.18",
  PORT: 3306,
  USER: "dev",
  PASSWORD: "2XojoYvDEY",
  DB: "prueba_despliegue",
  DIALECT: "mysql"
};

const sequelize = new Sequelize(DATABASE.DB, DATABASE.USER, DATABASE.PASSWORD, {host: DATABASE.HOST, dialect: DATABASE.DIALECT}) 

const auth = AuthModel(sequelize, Sequelize)

sequelize.sync({force: false})
  .then(() => {
    console.log('Tabla de auth sync');
  })

module.exports = {
  auth
}
