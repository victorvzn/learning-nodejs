const express = require('express')
const { faker } = require('@faker-js/faker')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello from Express.js')
})

app.get('/products', (req, res) => {
  const { size } = req.query
  const limit = size || 10

  const products = []

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }

  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json({ id })
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
