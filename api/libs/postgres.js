const { Client } = require('pg')

async function getConnection () {
  const client = new Client({
    host: 'localhost',
    port: 5433,
    user: 'store',
    password: 'storepass',
    database: 'storedb'
  })

  await client.connect()

  return client
}

module.exports = getConnection
