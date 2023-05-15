const journeysRouter = require('express').Router()
const Journey = require('../models/journey')

journeysRouter.get('/', async (req, res) => {
  console.log('Getting data')
  let journeys = await Journey.find({}).limit(100)
  res.json(journeys)
})

module.exports = journeysRouter