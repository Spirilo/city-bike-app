const stationsRouter = require('express').Router()
const Station = require('../models/station')


stationsRouter.get('/', async (req, res) => {
    let stations = await Station.find({})
    res.json(stations)
})

module.exports = stationsRouter