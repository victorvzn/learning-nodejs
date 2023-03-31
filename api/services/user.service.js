const boom = require('@hapi/boom')
const bycrypt = require('bcrypt')

const { models } = require('../libs/sequelize')

class UserService {
  async create (data) {
    const hash = await bycrypt.hash(data.password, 10)

    const newUser = await models.User.create({
      ...data,
      password: hash
    })

    delete newUser.dataValues.password

    return newUser
  }

  async find () {
    const res = await models.User.findAll({
      include: ['customer']
    })

    return res
  }

  async findOne (id) {
    const user = await models.User.findByPk(id)

    if (!user) {
      throw boom.notFound('user not found')
    }

    return user
  }

  async update (id, changes) {
    const user = await this.findOne(id)

    const res = await user.update(changes)

    return res
  }

  async delete (id) {
    const user = await this.findOne(id)

    await user.destroy()

    return { id }
  }
}

module.exports = UserService
