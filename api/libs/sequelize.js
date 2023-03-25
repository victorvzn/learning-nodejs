const { Sequelize } = require('sequelize')

const { config } = require('../config/config')
const setupModels = require('../db/models')

const USER = config.dbUser
const PASSWORD = config.dbPassword

const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
})

setupModels(sequelize)

sequelize.sync()

module.exports = sequelize
