const express = require('express')
const router = express.Router()
const {ObjectID} = require('mongodb')
const request = require('request')

//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')
const Votacion = require('../models/votos')

const url = `https://tse-dummy-server.herokuapp.com/`

//! Routes
//? Obtener infomacion basica del corte
router.get('/corte', async (req, res) => {
    try {
        const corte = await Corte.find({})
        res.send(corte)
    } catch (error) {  
        res.status(500).send(error)
    }
})

//* /corte/:type?limit=#?skip=#

//? Obtener informacion basica del corte de alcaldes
router.get('/corte/:type', async (req, res) => {
    try {
        const type = req.params.type  
        //* Get All
        //const eleccion = await Eleccion.findOne({"e.id":type})
        
        //* Pagination
        //? Match criteria
        const match = {e:{}} 
        match.e.id = type    
        const corte = await Corte.find({})
        await Corte.populate({
            path: 'elecciones',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip)
            }
        }).execPopulate()

        return res.send(corte)
    } catch (error) {
        return res.status(500).send()
    }
})

//? Obtener todas las votaciones del corte de alcaldes
router.get('/corte/alcaldes/votos/:id', async (req, res) => {
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