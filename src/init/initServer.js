
const initServer = async (app) => {
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

module.exports = initServer