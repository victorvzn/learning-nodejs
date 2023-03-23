const express = require('express')

const ProductService = require('../services/product.service')

const router = express.Router()

const productService = new ProductService()

router.get('/', (req, res) => {
  const products = productService.find()

  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const product = productService.findOne(id)

  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body

  const newProduct = productService.create(body)

  res.status(201).json(newProduct)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  const product = productService.update(id, body)

  res.json(product)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  const response = productService.delete(id)

  res.json(response)
})

module.exports = router
