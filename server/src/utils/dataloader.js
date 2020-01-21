const request = require('request')

//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')
const Votacion = require('../models/votos')

const url = `https://tse-dummy-server.herokuapp.com/`

const loadData = () => {
    request(url, async (err, res, body) => {
        const data = JSON.parse(body)
        const {numero, fecha, hora} = data
    
        //* Load basic data
        const newCorte = new Corte({numero, fecha, hora})
        const {_id} = await newCorte.save()
        
        //* Load data for .e
        const {e} = data
        e.forEach(async (item) => {
            const {id, l} = item
            const newEleccion = new Eleccion({"e.id": id, "e.l": l, corte:_id })
            await newEleccion.save()
    
            //const elecciones = await Eleccion.find({})
    
            //console.log(elecciones[0].e.l[1]);
            //console.log(item.l[0]);
            
            //TODO Load votos data into db, remember to write the eleccion _id for reference.
            // elecciones[0].e.l.forEach((lugar, index) => {
            //     console.log(`${index}: ${lugar._id}`);
                
            //     //! Hacer hardcode a cada parte de L, osea A y R
            //     item.l[0].v.forEach(async (v) => {
            //         const votacion = new Votacion({...v, lugar: lugar._id})
            //         console.log('Saved Votacion');
                    
            //         await votacion.save()
            //     })
            // })             
        })
    })
}

const clearDataBase = async () => {
    await Corte.remove({})
    await Eleccion.remove({})
    await Votacion.remove({})
}
module.exports = {
    loadData,
    clearDataBase
}