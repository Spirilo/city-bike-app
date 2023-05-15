const Journey = require('./models/journey')
const Station = require('./models/station')
const csv = require('csvtojson')
const mongoose = require('mongoose')
const config = require('./utils/config')
const _ = require('lodash')

const paths = config.DATA.split(',')
const stations = config.STATIONS
console.log(paths)

async function cycle() {
  for (const path of paths) {
    await insertJourneys(path)
  }
  insertStations()
}

async function insertStations() {
  const jsonArray = await csv()
  .fromFile(stations);

  await Station.insertMany(jsonArray);
  console.log('Stations in')
}


async function insertJourneys(path) {
    const jsonArray = await csv({
      noheader: false,
      headers: [
        'departure',
        'return',
        'departureStationId',
        'departureStationName',
        'returnStationId',
        'returnStationName',
        'distance',
        'duration'
      ]
    })
    .fromFile(path);
    
    const filterDist = _.filter(jsonArray, j => j.distance > 10)
    const filterRest = _.filter(filterDist, j => j.duration > 10)
    console.log(filterRest.length)
  
    await Journey.insertMany(filterRest);
    console.log('Data inserted successfully');
  }
mongoose.connect(config.MONGODB_URI)
  .then(() => cycle())
  .then(() => mongoose.connection.close)
