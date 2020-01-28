const request = require('request')

//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')
const Lugar = require('../models/lugar')

const url = `https://tse-dummy-server.herokuapp.com/`

const loadData = () => {
    try{
        request(url, async (err, res, body) => {
            const data = JSON.parse(body)
            const {numero, fecha, hora} = data
        
            //* Load basic data
            const newCorte = new Corte({numero, fecha, hora})
            const {_id} = await newCorte.save()
            const idEleccion = _id
            // console.log(idEleccion);
            
            //* Load data for .e
            const {e} = data
            e.forEach(async (item) => {
                const {id, l} = item
                const newEleccion = new Eleccion({id, corte:idEleccion })
                const {_id} = await newEleccion.save()
                
                l.forEach(async (lugar) => {
                    const newLugar = new Lugar({...lugar, eleccion: _id })
                    await newLugar.save()
                })
            })
        })
        return {error: undefined, status: 201}
    } catch(e){
        return {
            error: e,
            response: undefined
        }
    }
}

const clearDataBase = async () => {
    await Corte.deleteMany({})
    await Eleccion.deleteMany({})
    await Lugar.deleteMany({})
}

module.exports = {
    loadData,
    clearDataBase
}