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
        const { type } = req.params
        const eleccion = await Eleccion.findOne({id:type})

        //* Pagination
        const sort = {}
 
        //* Sorting
        if(req.query.sortBy){ 
            //? Split query at special character
            const parts =  req.query.sortBy.split(':')
            //? Turnary operator
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1  
        }

        await eleccion.populate({
            path: 'lugares',
            options: {
                limit: parseInt(req.query.limit) || 10 ,
                skip: parseInt(req.query.skip),
                sort
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