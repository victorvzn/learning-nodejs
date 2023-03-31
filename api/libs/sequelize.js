const { Sequelize } = require('sequelize')

const { config } = require('../config/config')
const setupModels = require('../db/models')

const DRIVER = 'postgres' // mysql

const options = {
  dialect: DRIVER,
  logging: !!config.isProd
}

const sequelize = new Sequelize(config.dbUrl, options)

setupModels(sequelize)

module.exports = sequelize
