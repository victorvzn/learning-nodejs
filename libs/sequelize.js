const { Sequelize } = require('sequelize')

const { config } = require('../config/config')

const USER = config.dbUser
const PASSWORD = config.dbPassword

const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
})

module.exports = sequelize
