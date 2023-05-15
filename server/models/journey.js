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

journeySchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})


module.exports = mongoose.model('Journey', journeySchema)