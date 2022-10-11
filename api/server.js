// api/server.js
require('dotenv').config({path: '.env'})

const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json());

app.use(cors());

app.get("/", function(req, res) {
  res.json({"name": "张三"})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})