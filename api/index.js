const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')
const { checkApiKey } = require('./middlewares/auth.handler')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

const whiteList = ['http://localhost:8080']

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}

app.use(cors(options))

require('./utils/auth')

app.get('/api', (req, res) => {
  res.send('Hello from Express.js')
})

app.get('/api/private', checkApiKey, (req, res) => {
  res.send('Private route')
})

routerApi(app)

// Custom middlewares
app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
