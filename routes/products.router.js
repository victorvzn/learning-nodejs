const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

router.get('/', (req, res) => {
  const limit = 100

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

router.get('/:id', (req, res) => {
  const { id } = req.params

  res.json({ id })
})

router.post('/', (req, res) => {
  const body = req.body

  res.json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: 'updated',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router
