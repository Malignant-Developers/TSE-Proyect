const request = require('request')

//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')
const Lugar = require('../models/lugar')

const url = `https://tse-dummy-server.herokuapp.com/`

const loadData = () => {
    return new Promise((resolve, reject) => {
        try{
            request(url, async (err, res, body) => {
                const data = JSON.parse(body)
                const {numero, fecha, hora} = data
            
                //* Load basic data
                const newCorte = new Corte({numero, fecha, hora})
                const {_id} = await newCorte.save()
                const idEleccion = _id
                
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
                resolve(201)
            })
        } catch(e){
            reject(Error('Unable to load data'))
        }
    })
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