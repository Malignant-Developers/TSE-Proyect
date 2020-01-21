const mongoose = require('mongoose')
//? Define the new schema
const eleccionSchema = new mongoose.Schema({
    e: {
        id: {
            type: String,
            required: true
        },
        l:[
            {
                nivel1:{
                    type: Number
                },
                nivel2:{
                    type: Number
                },
                nivel3: {
                    type: Number
                },
                nivel4: {
                    type: Number
                },
                totalMesas:{
                    type: Number
                },
                mesasProcesadas:{
                    type: Number
                },
                votosEmitidos: {
                    type: Number
                },
                vtosValidos: {
                    type: Number
                },
                nulosYBlancos: {
                    type: Number
                },
                electores: {
                    type: Number
                }
            }
        ]
    },
    corte: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Corte'
    }
})
//? Create the model
const Eleccion = mongoose.model('Eleccion', eleccionSchema)
//? Export the model
module.exports = Eleccion