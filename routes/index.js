const express = require('express')
//
const productsRouter = require('./products.router')
// const usersRouter = require('./users.router')

function routerApi (app) {
  const router = express.Router()

  app.use('/v1', router)

  router.use('/products', productsRouter)
  // app.use('/users', usersRouter)
}

module.exports = routerApi
