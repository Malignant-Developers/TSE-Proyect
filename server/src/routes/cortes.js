const express = require('express')
const router = express.Router()
//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')
//! Load static data
const dataCorte = require('../db/staticdata')
const dataEleccion = require('../db/eleccionData')

//! Routes
//? Obtener infomacion basica del corte
router.get('/corte', async (req, res) => {
    try {
        // let corte = new Corte(data)
        // await corte.save()

        const corte = await Corte.find({})
        res.send(corte)
    } catch (error) {
        console.log(error);
        
        res.status(500).send(error)
    }
})

//? Obtener informacion basica del corte de alcaldes
router.get('/corte/alcaldes', async (req, res) => {
    try {
        const corte = await Corte.find({})
        //console.log(corte[0].numero);
        
        // const dummyData = new Eleccion({...dataEleccion, eleccion: corte[0].numero})
        // await dummyData.save()

        const eleccion = await Eleccion.findOne({},{
            'e':
                { $elemMatch: { id: 'A' } }
        })
        
        res.send(eleccion)
    } catch (error) {
        console.log(error);
        
        res.status(500).send()
    }
})

//? Obtener informacion basico del corte de regidores
router.get('/corte/regidores', async (req, res) => {
    try {
        const corte = await Corte.find({})
        //console.log(corte[0].numero);
        
        // const dummyData = new Eleccion({...dataEleccion, eleccion: corte[0].numero})
        // await dummyData.save()

        const eleccion = await Eleccion.findOne({},{
            'e':
                { $elemMatch: { id: 'R' } }
        })
        
        res.send(eleccion)
    } catch (error) {
        console.log(error);
        
        res.status(500).send()
    }
})

//? Obtener todas las votaciones del corte de alcaldes
router.get('/corte/alcaldes/votos', async (req, res) => {
    
})

//? Obtener todas las votacion del corte de regidores
router.get('/corte/regidores/votos')

//? Obtener informacion sobre una sola votacion de alcaldes
router.get('/corte/alcaldes/votos/:id')

//? Obtener informacion sobre una sola votacion de regidores
router.get('/corte/regidores/votos/:id')

module.exports = router