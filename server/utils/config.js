require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let DATA = process.env.DATA_CSV

module.exports = {
  MONGODB_URI,
  PORT,
  DATA
}