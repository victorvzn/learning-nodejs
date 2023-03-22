const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello from Express.js')
})

app.get('/products', (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.json({
      message: 'No hay parámetros'
    })
  }

  res.json([])
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json({ id })
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
