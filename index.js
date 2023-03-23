const express = require('express')
const routerApi = require('./routes')

const { logErrors, errorHandler } = require('./middlewares/error.handler')

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from Express.js')
})

routerApi(app)

// Custom middlewares
app.use(logErrors)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
