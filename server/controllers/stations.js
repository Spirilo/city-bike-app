const stationsRouter = require('express').Router()
const Station = require('../models/station')
const Journey = require('../models/journey')

//get all stations
stationsRouter.get('/', async (req, res) => {
    let stations = await Station.find({})
    res.json(stations)
})

//get station by id and returns and departures from the same station
stationsRouter.get('/:id', async (req, res) => {
    let depStations = 0
    let retStations = 0
    let station = await Station.findById(req.params.id)
    try {
      depStations = (await Journey.find({departureStationName: station.Nimi})).length
      retStations = (await Journey.find({returnStationName: station.Nimi})).length
    } catch (error) {
      console.log(error.message)
    }
    res.json({station, depStations, retStations})
})



module.exports = stationsRouter