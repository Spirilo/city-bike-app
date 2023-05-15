const mongoose = require('mongoose')

const stationSchema = new mongoose.Schema({
    FID: Number,
    ID: Number,
    Nimi: String,
    Namn: String,
    Name: String,
    Osoite: String,
    Adress: String,
    Kaupunki: {
        type: String,
        required: false
    },
    Stad: {
        type: String,
        required: false
    },
    Operaattor: {
        type: String,
        required: false
    },
    Kapasiteet: Number,
    x: Number,
    y: Number

})

stationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Station', stationSchema)