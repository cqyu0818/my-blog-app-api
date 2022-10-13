require('dotenv').config({ path: '../../.env' })

const jwt = require('jsonwebtoken')

// 加签 => token
const sign = async (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign({
      username: user.username,
      email: user.email
    }, process.env.JWT_SECRect, (err, token) => {
      if(err) {
        return reject(err)
      }
      resolve(token)
    })
  })
}

// 解签 => 验证
const decode = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRect, (err, decoded) => {
      if (err) {
        return reject(err)
      }
      resolve(decoded)
    })
  })
}

module.exports = {
  sign,
  decode
}