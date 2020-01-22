const express = require('express')
const router = express.Router()

//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')

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
        const eleccion = await Eleccion.findOne({id:type})

        //* Pagination
        //? Match criteria
        // Todo Implement matching and sorting
        const match = {

        }
        
        await eleccion.populate({
            path: 'lugares',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip)
            }
        }).execPopulate()

        return res.send(eleccion.lugares)

    } catch (error) {
        console.log(error);
        
        return res.status(500).send()
    }
})

//? Obtener informacion sobre una sola votacion de alcaldes
router.get('/corte/alcaldes/votos/:id')

//? Obtener informacion sobre una sola votacion de regidores
router.get('/corte/regidores/votos/:id')

module.exports = router