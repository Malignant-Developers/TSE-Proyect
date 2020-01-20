const express = require('express')
const router = express.Router()
const {ObjectID} = require('mongodb')
const request = require('request')

//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')
const Votacion = require('../models/votos')

const url = `https://tse-dummy-server.herokuapp.com/`

const clearDataBase = async () => {
    await Corte.remove({})
    await Eleccion.remove({})
    await Votacion.remove({})
}


//! Routes
//? Obtener infomacion basica del corte
router.get('/corte', async (req, response) => {
    try {
        clearDataBase()

        let data;
        request(url, async (err, res, body) => {
            const data = JSON.parse(body)
            const {numero, fecha, hora} = data

            //* Load basic data
            const newCorte = new Corte({numero, fecha, hora})
            await newCorte.save()

            //* Load data for .e
            const {e} = data
            e.forEach(async (item) => {
                const {id, l} = item
                const newEleccion = new Eleccion({"e.id": id, "e.l": l, eleccion: numero})
                await newEleccion.save()

                const elecciones = await Eleccion.find({})
                console.log(elecciones);
                //TODO Load votos data into db, remember to write the eleccion _id for reference.
            })

            
            //* Load data for .v

            const eleccionA = data.e[0].l
            //console.log(typeof(data.e[0].l));
            // elecciones.forEach(item => {
            //     console.log(item.id);
                
            // })

            eleccionA.forEach(item => {
                //console.log(item.v);
                
            })
            
        })

        

        //const corte = await Corte.find({})
        //res.send(corte)
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