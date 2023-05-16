const stationsRouter = require('express').Router()
const Station = require('../models/station')


stationsRouter.get('/', async (req, res) => {
    let stations = await Station.find({})
    res.json(stations)
})

stationsRouter.get('/:id', async (req, res) => {
    let station = await Station.findById(req.params.id)
    console.log(station)
    res.json(station)
})

module.exports = stationsRouter