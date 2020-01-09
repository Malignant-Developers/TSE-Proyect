const mongoose = require('mongoose')

//? Define a schema
const corteSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    }
})
//? Create the model and pass in the schema
const Corte = mongoose.model('Corte', corteSchema)
//? Export the modell
module.exports = Corte