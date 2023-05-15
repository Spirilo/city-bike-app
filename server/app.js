const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const journeysRouter = require('./controllers/journeys')
const stationsRouter = require('./controllers/stations')


mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('Connection OK'))
  .catch((error) => console.log('Error connecting to MongoDB', error.message))

app.use(cors())
app.use(express.json())
app.use('/api/journeys', journeysRouter)
app.use('/api/stations', stationsRouter)

module.exports = app