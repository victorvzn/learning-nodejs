const boom = require('@hapi/boom')
const { faker } = require('@faker-js/faker')

const { models } = require('../libs/sequelize')

class ProductService {
  constructor () {
    this.products = []
    this.generate()
  }

  generate () {
    const limit = 100

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        image: faker.image.imageUrl()
      })
    }
  }

  async create (data) {
    const newProduct = await models.Product.create(data)

    return newProduct
  }

  async find () {
    const products = await models.Product.findAll({
      include: ['category']
    })

    return products
  }

  findOne (id) {
    const product = this.products.find(item => item.id === id)
    if (!product) {
      throw boom.notFound('product not found')
    }
    return product
  }

  update (id, changes) {
    const index = this.products.findIndex(item => item.id === id)

    if (index === -1) {
      throw boom.notFound('product not found')
      // throw new Error('Product not found')
    }

    const product = this.products[index]

    this.products[index] = { ...product, ...changes }

    return this.products[index]
  }

  delete (id) {
    const index = this.products.findIndex(item => item.id === id)

    if (index === -1) {
      throw new Error('Product not found')
    }

    this.products.splice(index, 1)

    return { id }
  }
}

module.exports = ProductService
