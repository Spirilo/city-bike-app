const mongoose = require('mongoose')

const journeySchema = new mongoose.Schema({
    departure: Date,
    return: Date,
    departureStationId: Number,
    departureStatinName: String,
    returnStationId: Number,
    returnStatinName: String,
    distance: Number,
    duration: Number
})

module.exports = mongoose.model('Journey', journeySchema)