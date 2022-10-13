const dbConnection = require('../db/connection')
const sequelize = require('../db/sequelize')

const User = require('../models/user')
const Article = require('../models/article')
const Comment = require('../models/comment')
const Tag = require('../models/tag')

// 模型关系
const initRelation = () => {
  // 用户和文章关系： 一对多
  User.hasMany(Article, {
    onDelete: 'CASCADE'
  })
  Article.belongsTo(User)

  // 用户和评论: 一对多
  User.hasMany(Comment, {
    onDelete: 'CASCADE'
  })
  Comment.belongsTo(User)

  // 用户-文章(喜欢)： 多对多
  User.belongsToMany(Article, {
    through: 'Favorites',
    timestamps: false
  })
  Article.belongsToMany(User, {
    through: 'Favorites',
    timestamps: false
  })

  // 用户-用户（关注）： 多对多
  User.belongsToMany(User, {
    through: 'Followers',
    as: 'followers',
    timestamps: false
  })

  // 文章和标签：多对多
  Article.belongsToMany(Tag, {
    through: 'TagList',
    uniqueKey: false,
    timestamps: false
  })
  Tag.belongsToMany(Article, {
    through: 'TagList',
    uniqueKey: false,
    timestamps: false
  })
}

const initDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // 数据库链接
      await dbConnection()
      // 初始化model关系
      initRelation()
      // 同步所有模型关系
      sequelize.sync({alter: true})
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = initDB