const mongoose = require('mongoose')
//? Create the schema
const votosSchema = new mongoose.Schema({
    v:[{
        codPartido: {
            type: Number,
            required: true
        },
        votos: {
            type: Number,
            required: true
        },
    
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