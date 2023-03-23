const express = require('express')

const ProductService = require('../services/product.service')

const router = express.Router()

const productService = new ProductService()

router.get('/', async (req, res) => {
  const products = await productService.find()

  res.json(products)
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const product = await productService.findOne(id)

    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res) => {
  const body = req.body

  const newProduct = await productService.create(body)

  res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res, nexy) => {
  try {
    const { id } = req.params
    const body = req.body

    const product = await productService.update(id, body)

    res.json(product)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const response = await productService.delete(id)

  res.json(response)
})

module.exports = router
