const Journey = require('./models/journey')
const csv = require('csvtojson')
const mongoose = require('mongoose')
const config = require('./utils/config')
const _ = require('lodash')
require('dotenv').config()

const paths = process.env.DATA_CSV.split(',')
console.log(paths)

async function cycle(paths) {
  for (const path of paths) {
    await insertData(path)
  }
}


async function insertData(path) {
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
  .then(() => cycle(paths))
  .then(() => mongoose.connection.close)
