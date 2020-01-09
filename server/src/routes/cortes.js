const express = require('express')
const router = express.Router()
const {ObjectID} = require('mongodb')
//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')
const Votacion = require('../models/votos')
//! Load static data
const dataCorte = require('../db/staticdata')
const dataEleccion = require('../db/eleccionData')
const votosData = require('../db/votosData')

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

        //? Find the 'eleccion' subdocument matching with the field id
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
router.get('/corte/alcaldes/votos/:id', async (req, res) => {
    const dummyData = votosData
    try {
        const eleccion = await Eleccion.findOne({},{
            'e':
                { $elemMatch: { id: 'A' } }
        })

        const idArray = []
        const e = eleccion.e
        //console.log(e[0].l[0]._id);
        
        eleccion.e[0].l.forEach(eleccion => {
            //console.log(eleccion._id);
            idArray.push(eleccion._id)
        })
        // console.log(idArray);
        
        // for(let i = 0; i < idArray.length; i++ ){
        //     let votacion = new Votacion({...dummyData, lugar: idArray[i].toString()})
        //     await votacion.save()
        // }
        console.log(req.params.id);
        const id = new ObjectID(req.params.id.toString())
        let votacion = await Votacion.findOne({lugar: id})
        res.send(votacion)
    } catch (error) {
        console.log(error);
        
        res.status(500).send(error)
    }



})

//? Obtener todas las votacion del corte de regidores
router.get('/corte/regidores/:id', async (req, res) => {
    const dummyData = votosData
    try {
        // const eleccion = await Eleccion.findOne({},{
        //     'e':
        //         { $elemMatch: { id: 'R' } }
        // })

        // const idArray = []
        // const e = eleccion.e
        // //console.log(e[0].l[0]._id);
        
        // eleccion.e[0].l.forEach(eleccion => {
        //     //console.log(eleccion._id);
        //     idArray.push(eleccion._id)
        // })
        // // console.log(idArray);
        
        // for(let i = 0; i < idArray.length; i++ ){
        //     let votacion = new Votacion({...dummyData, lugar: idArray[i].toString()})
        //     await votacion.save()
        // }
        //console.log(req.params.id);
        const id = new ObjectID(req.params.id.toString())
        let votacion = await Votacion.findOne({lugar: id})
        res.send(votacion)
    } catch (error) {
        console.log(error);
        
        res.status(500).send(error)
    }
})

//? Obtener informacion sobre una sola votacion de alcaldes
router.get('/corte/alcaldes/votos/:id')

//? Obtener informacion sobre una sola votacion de regidores
router.get('/corte/regidores/votos/:id')

module.exports = router