const { Sequelize } = require('sequelize')

const { config } = require('../config/config')
const setupModels = require('../db/models')

const USER = config.dbUser
const PASSWORD = config.dbPassword

const DRIVER = 'postgres' // mysql

const URI = `${DRIVER}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: DRIVER,
  logging: console.log
})

setupModels(sequelize)

module.exports = sequelize
