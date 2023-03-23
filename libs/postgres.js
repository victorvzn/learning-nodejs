const { Client } = require('pg')

async function getConnection () {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'store',
    password: 'storepass',
    database: 'storedb'
  })

  return await client.connect()
}

module.exports = getConnection
