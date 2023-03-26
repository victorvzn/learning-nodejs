const { Sequelize } = require('sequelize')

const { config } = require('../config/config')
const setupModels = require('../db/models')

const USER = config.dbUser
const PASSWORD = config.dbPassword

const driver = 'mysql' // postgres

const URI = `${driver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: driver,
  logging: true
})

setupModels(sequelize)

// sequelize.sync({ force: true })
sequelize.sync()

module.exports = sequelize
