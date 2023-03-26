const { Sequelize } = require('sequelize')

const { config } = require('../config/config')
const setupModels = require('../db/models')

const USER = config.dbUser
const PASSWORD = config.dbPassword

const DRIVER = 'postgres' // mysql

const URI = `${DRIVER}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: DRIVER,
  logging: true
})

setupModels(sequelize)

// sequelize.sync({ force: true })
sequelize.sync()

module.exports = sequelize
