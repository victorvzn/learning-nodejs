const express = require('express')
const routerApi = require('./routes')

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from Express.js')
})

routerApi(app)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
