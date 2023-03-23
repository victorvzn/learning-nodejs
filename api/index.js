const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()

const PORT = 3000

app.use(express.json())

const whiteList = ['http://localhost:8080']

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed'))
    }
  }
}

app.get('/api', (req, res) => {
  res.send('Hello from Express.js')
})

routerApi(app)

app.use(cors(options))

// Custom middlewares
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
