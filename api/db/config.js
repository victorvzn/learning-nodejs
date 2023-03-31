const { config } = require('../config/config')

// const USER = config.dbUser
// const PASSWORD = config.dbPassword

const DRIVER = 'postgres' // mysql

// const URI = `${DRIVER}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: DRIVER
  },
  production: {
    url: config.dbUrl,
    dialect: DRIVER
  }
}
