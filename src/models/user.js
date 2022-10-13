const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  bio: { // 简介
    type: DataTypes.STRING,
    allowNull: true
  },
})

module.exports = User