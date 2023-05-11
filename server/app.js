const config = require('./utils/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('Connection OK'))
  .catch((error) => console.log('Error connecting to MongoDB', error.message))

app.use(express.json())

module.exports = app