'use strict'

const { PRODUCT_TABLE } = require('../models/product.model')
const { ORDER_TABLE } = require('../models/order.model')
const { ORDER_PRODUCT_TABLE } = require('../models/order-product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.removeConstraint(PRODUCT_TABLE, 'products_category_id_key')
    queryInterface.removeConstraint(ORDER_TABLE, 'orders_customer_id_key')
    queryInterface.removeConstraint(ORDER_PRODUCT_TABLE, 'orders_products_order_id_key')
    queryInterface.removeConstraint(ORDER_PRODUCT_TABLE, 'orders_products_product_id_key')
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
