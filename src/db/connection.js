const sequelize = require('./sequelize')

const dbConnection = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await sequelize.authenticate() // 测试数据库是否连接成功
      resolve()
      console.log('Connection mysql has been established successfully.')
    } catch (error) {
      reject(error)
      console.error('Unable to connect to the database:', error)
    }
  })
}

module.exports = dbConnection