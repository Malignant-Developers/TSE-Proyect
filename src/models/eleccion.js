const mongoose = require('mongoose')
//? Define the new schema
const eleccionSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    corte: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Corte'
    }
})
//! Virtual field for pagination
eleccionSchema.virtual('lugares', {
    ref: 'Lugar',
    localField: '_id',
    foreignField: 'eleccion'
})

//? Create the model
const Eleccion = mongoose.model('Eleccion', eleccionSchema)
//? Export the model
module.exports = Eleccion