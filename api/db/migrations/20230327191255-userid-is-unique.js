'use strict'

const { DataTypes } = require('sequelize')
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    })

    // Another way to add a unique constraint
    // await queryInterface.addConstraint(CUSTOMER_TABLE, {
    //   fields: ['user_id'],
    //   type: 'unique',
    //   name: 'unique_user_id'
    // })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    // await queryInterface.removeConstraint(CUSTOMER_TABLE, 'unique_user_id');
  }
}
