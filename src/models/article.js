const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const Article = sequelize.define('article', {
  slug: { // 别名
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports = Article