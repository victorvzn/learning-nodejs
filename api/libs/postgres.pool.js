const { Pool } = require('pg')

const { config } = require('../config/config')

const USER = config.dbUser
const PASSWORD = config.dbPassword

const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI })

module.exports = pool
