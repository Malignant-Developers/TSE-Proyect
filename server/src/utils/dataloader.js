const request = require('request')
const rp = require('request-promise')

//! Import the models
const Corte = require('../models/corte')
const Eleccion = require('../models/eleccion')
const Lugar = require('../models/lugar')

const url = `https://tse-dummy-server.herokuapp.com/`

const loadData = () => {
    return new Promise((resolve, reject) => {
        try {
            request(url, async (err, res, body) => {
                
                if(err){
                    return reject(Error('Unable to load data'))
                }
                
                //* Parse the data
                const data = JSON.parse(body)
                //* Destructure basic meta data
                const { numero, fecha, hora } = data

                //* Create te document from the model
                const newCorte = new Corte({ numero, fecha, hora })
                
                //* Desturcture the id from the saved document
                const { _id } = await newCorte.save()
                const idEleccion = _id

                //* Destructure e array from data
                const { e } = data

                //? For each element in E
                e.forEach(async (eleccion) => {
                    //* Destructure the id and l array
                    const { id, l } = eleccion

                    //* Create the document from the model
                    const _eleccion = new Eleccion({ id, corte: idEleccion })

                    //* Destructure the id from the saved document
                    const { _id } = await _eleccion.save()

                    //? For each element in the L array
                    l.forEach(async (lugar) => {
                        //* Create the document from the model
                        const _lugar = new Lugar({ ...lugar, eleccion: _id })
                        //* Save the document
                        await _lugar.save()
                    })
                    resolve(201)
                }) 
            })
            
        } catch (e) {
            reject(Error('Unable to load data'))
        }
    })
}

const clearDataBase = async () => {
    await Corte.deleteMany()
    await Eleccion.deleteMany()
    await Lugar.deleteMany()
}

module.exports = {
    loadData,
    clearDataBase
}