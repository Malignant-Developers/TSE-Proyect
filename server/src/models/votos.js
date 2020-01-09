const mongoose = require('mongoose')
//? Create the schema
const votosSchema = new mongoose.Schema({
    v:[{
        codPartido: {
            type: Number
        },
        votos: {
            type: Number
        }
    }],
    lugar: {
        ref: 'Eleccion',
        type: mongoose.Types.ObjectId,
        required: true
    }
})
//? Define the model
const Votos = mongoose.model('Voto', votosSchema)
//? Export this model
module.exports = Votos