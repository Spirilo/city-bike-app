const mongoose = require('mongoose')

const journeySchema = new mongoose.Schema({
    departure: Date,
    return: Date,
    departureStationId: Number,
    departureStationName: String,
    returnStationId: Number,
    returnStationName: String,
    distance: Number,
    duration: Number
})


module.exports = mongoose.model('Journey', journeySchema)