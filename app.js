require('dotenv').config({path: '.env'})

const initDB = require('./src/init/initDB')
const initServer = require('./src/init/initServer')
const initRoute = require('./src/init/initRoute')

const cors = require('cors')
const morgan = require('morgan')

const noMatchMiddleware = require('./src/middleware/404')
const errorMiddleware = require('./src/middleware/error')

const express = require("express")
const app = express()

initRoute(app)

// 中间件
app.use(cors({ credentials: true, origin: true })) // 跨域
app.use(express.json()) // 解析
app.use(morgan('tiny')) // http日志

app.use(noMatchMiddleware) // 404
app.use(errorMiddleware) // 错误处理

const main = async () => {
  // 初始化数据库
  await initDB()
  // 启动node服务
  await initServer(app)
}

main()