const mongoose = require('mongoose')
const Corte = require('../../src/models/corte')
const Eleccion = require('../../src/models/eleccion')
const Lugar = require('../../src/models/lugar')

const corteId = new mongoose.Types.ObjectId()
const corte = {
    _id: corteId,
    "numero": "5", 
    "fecha": "2019-06-07",
    "hora": "01:46 p.m.",
}
const eleccionAlcaldeId = new mongoose.Types.ObjectId()
const eleccionAlcalde = {
    "_id": eleccionAlcaldeId,
    "id": "A",
    "corte": corteId,
}

const eleccionRegidorId = new mongoose.Types.ObjectId()
const eleccionRegidor= {
    "_id": eleccionRegidorId,
    "id": "R",
    "corte": corteId,
}

const lugarAlcaldeUnoId = new mongoose.Types.ObjectId()
const lugarAlcaldeUno = {
    "_id": lugarAlcaldeUnoId,
    "nivel1": 1,
    "nivel2": 2,
    "nivel3": 0,
    "nivel4": 0,
    "totalMesas": 347,
    "mesasProcesadas": 388,
    "votosEmitidos": 60880,
    "nulosYBlancos": 2883,
    "electores": 225660,
    "v": [
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 4,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 5,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 6,
            "votos": 9080
        }
    ],
    eleccion: eleccionAlcaldeId
}
const lugarAlcaldeDosId = new mongoose.Types.ObjectId()
const lugarAlcaldeDos = {
    "_id": lugarAlcaldeDosId,
    "nivel1": 1,
    "nivel2": 2,
    "nivel3": 0,
    "nivel4": 0,
    "totalMesas": 347,
    "mesasProcesadas": 388,
    "votosEmitidos": 60880,
    "nulosYBlancos": 2883,
    "electores": 225660,
    "v": [
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 4,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 5,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 6,
            "votos": 9080
        }
    ],
    eleccion: eleccionAlcaldeId
}
const lugarAlcaldeTresId = new mongoose.Types.ObjectId()
const lugarAlcaldeTres = {
    "_id": lugarAlcaldeTresId,
    "nivel1": 1,
    "nivel2": 2,
    "nivel3": 0,
    "nivel4": 0,
    "totalMesas": 347,
    "mesasProcesadas": 388,
    "votosEmitidos": 60880,
    "nulosYBlancos": 2883,
    "electores": 225660,
    "v": [
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 4,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 5,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 6,
            "votos": 9080
        }
    ],
    eleccion: eleccionAlcaldeId
}

const lugarRegidorUnoId = new mongoose.Types.ObjectId()
const lugarRegidorUno = {
    "_id": lugarRegidorUnoId,
    "nivel1": 1,
    "nivel2": 2,
    "nivel3": 0,
    "nivel4": 0,
    "totalMesas": 347,
    "mesasProcesadas": 388,
    "votosEmitidos": 60880,
    "nulosYBlancos": 2883,
    "electores": 225660,
    "v": [
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 4,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 5,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 6,
            "votos": 9080
        }
    ],
    eleccion: eleccionRegidorId
}

const lugarRegidorDosId = new mongoose.Types.ObjectId()
const lugarRegidorDos = {
    "_id": lugarRegidorDosId,
    "nivel1": 1,
    "nivel2": 2,
    "nivel3": 0,
    "nivel4": 0,
    "totalMesas": 347,
    "mesasProcesadas": 388,
    "votosEmitidos": 60880,
    "nulosYBlancos": 2883,
    "electores": 225660,
    "v": [
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 4,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 5,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 6,
            "votos": 9080
        }
    ],
    eleccion: eleccionRegidorId
}
const lugarRegidorTresId = new mongoose.Types.ObjectId()
const lugarRegidorTres = {
    "_id": lugarRegidorTresId,
    "nivel1": 1,
    "nivel2": 2,
    "nivel3": 0,
    "nivel4": 0,
    "totalMesas": 347,
    "mesasProcesadas": 388,
    "votosEmitidos": 60880,
    "nulosYBlancos": 2883,
    "electores": 225660,
    "v": [
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 4,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 5,
            "votos": 9080
        },
        {
            "_id": new mongoose.Types.ObjectId,
            "codPartido": 6,
            "votos": 9080
        }
    ],
    eleccion: eleccionRegidorId
}

const setDataBase = async () => {
    //* Whipe the database
    await Lugar.deleteMany()
    await Eleccion.deleteMany()
    await Corte.deleteMany()

    //* Save test data in the database
    await  new Corte(corte).save()
    await new Eleccion(eleccionAlcalde).save()
    await new Eleccion(eleccionRegidor).save()
    
    await new Lugar(lugarAlcaldeUno).save()
    await new Lugar(lugarAlcaldeDos).save()
    await new Lugar(lugarAlcaldeTres).save()

    await new Lugar(lugarRegidorUno).save()
    await new Lugar(lugarRegidorDos).save()
    await new Lugar(lugarRegidorTres).save()
}

module.exports = {
    setDataBase,
    corte, 
    corteId,
    eleccionAlcaldeId,
    eleccionAlcalde,
    eleccionRegidorId,
    eleccionRegidor,
    lugarAlcaldeUnoId,
    lugarAlcaldeUno,
    lugarAlcaldeDosId,
    lugarAlcaldeDos,
    lugarAlcaldeTresId,
    lugarAlcaldeTres,
    lugarRegidorUnoId,
    lugarRegidorUno,
    lugarRegidorDosId,
    lugarRegidorDos,
    lugarRegidorTresId,
    lugarRegidorTres
}