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

//? Virtual field for pagination
corteSchema.virtual('elecciones', {
    ref: 'Eleccion',
    localField: '_id',
    foreignField: 'corte'
})

//? Create the model and pass in the schema
const Corte = mongoose.model('Corte', corteSchema)
//? Export the modell
module.exports = Corte