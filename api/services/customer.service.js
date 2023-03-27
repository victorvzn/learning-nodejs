const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class CustomerService {
  async find () {
    const res = await models.Customer.findAll({
      include: ['user']
    })

    return res
  }

  async findOne (id) {
    const customer = await models.Customer.findByPk(id)

    if (!customer) {
      throw boom.notFound('customer not found')
    }

    return customer
  }

  async create (data) {
    const newCustomer = await models.Customer.create(data)

    return newCustomer
  }

  async update (id, changes) {
    const model = await this.findOne(id)

    const res = await model.update(changes)

    return res
  }

  async delete (id) {
    const customer = await this.findOne(id)

    await customer.destroy()

    return { ok: true }
  }
}

module.exports = CustomerService
