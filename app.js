require('dotenv').config({path: '.env'})

const express = require("express")
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: false
})

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

const app = express()

const initServer = async () => {
  return new Promise((resolve, reject) => {
    const PORT = process.env.PORT || 8080
    app
    .listen(PORT, () => {
      resolve()
      console.log(`app listening on port ${PORT}`)
    })
    .on('error', (error) => {
      reject(error)
    })
  })
}

const main = async () => {
  // 启动数据库服务
  await dbConnection()
  // 启动node服务
  await initServer()
}

main()