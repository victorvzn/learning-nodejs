const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class CustomerService {
  async find () {
    const res = await models.Customer.findAll()

    return res
  }

  async findOne (id) {
    const user = await models.Customer.findByPk(id)

    if (!user) {
      throw boom.notFound('user not found')
    }

    return user
  }

  async create (data) {
    // const newUser = await models.Customer.create(data)

    // return newUser

    return data
  }

  async update (id, changes) {
    const model = await this.findOne(id)

    const res = await model.update(changes)

    return res
  }

  async delete (id) {
    const user = await this.findOne(id)

    await user.destroy()

    return { ok: true }
  }
}

module.exports = CustomerService
