const mongoose = require('mongoose')
const lugarSchema = new mongoose.Schema({
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
        },
        v:[{
            codPartido: {
                type: Number,
                required: true
            },
            votos: {
                type: Number,
                required: true
            },
        
        }]
        ,eleccion: {
            ref: 'Eleccion',
            type: mongoose.Types.ObjectId,
            required: true
        }
})

const lugarModel = mongoose.model('Lugar', lugarSchema)
module.exports = lugarModel