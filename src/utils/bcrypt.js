const bcrypt = require('bcrypt')

const SALT = 10

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encrypted) => {
      if (err) {
        reject(err)
      }
      resolve(encrypted)
    })
  })
}

const matchPassword = (oldHashPWD, password) => {
  return new Promise(async (resolve, reject) => {
    const match = bcrypt.compare(password, oldHashPWD)
    console.log(match)
  })
}

module.exports = {
  hashPassword,
  matchPassword
}