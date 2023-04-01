const express = require('express')

const OrderService = require('../services/order.service')
const validatorHandler = require('../middlewares/validator.handler')

const { getOrderSchema, createOrderSchema, addItemSchema } = require('../schemas/order.schema')
const passport = require('passport')

const router = express.Router()
const service = new OrderService()

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params

      const order = await service.findOne(id)

      res.json(order)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body

      const newProduct = await service.create(body)

      res.status(201).json(newProduct)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/add-item',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body

      const newItem = await service.addItem(body)

      res.status(201).json(newItem)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
