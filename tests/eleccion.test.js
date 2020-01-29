const request = require('supertest')
const app = require('../src/app')
const Eleccion = require('../src/models/eleccion')
const Lugar = require('../src/models/lugar')
const {setDataBase, corteId,eleccionAlcalde, eleccionRegidor} = require('./fixtures/db')

beforeEach(setDataBase)

test('Should return the Eleccion Data for Alcalde', async() => {
    const response = await request(app)
    .get('/corte/A?limit=2&skip=1')
    .expect(200)

    const eleccion = await Lugar.findById(response.body[0]._id)
    expect(eleccion).not.toBeNull()
})

test('Should return the Eleccion Data for Regidor', async() => {
    const response = await request(app)
    .get('/corte/R?limit=2&skip=1')
    .expect(200)
    
    const eleccion = await Lugar.findById(response.body[0]._id)
    expect(eleccion).not.toBeNull()
})