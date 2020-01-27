const request = require('supertest')
const app = require('../src/app')
const Eleccion = require('../src/models/eleccion')
const {setDataBase, corteId,eleccionAlcalde, eleccionRegidor} = require('./fixtures/db')

beforeEach(setDataBase)

test('Should return the Eleccion Data for Alcalde', async() => {
    const response = await request(app)
    .get('/corte/A?limit=2&skip=1')
    .expect(200)

    const elecciones = await Eleccion.find({id:'A'})
    console.log(response.body);
    
    console.log(elecciones);
    console.log(response.body[0]._id);
    

    // const eleccion = await Eleccion.findById(response.body[0]._id)
    // expect(eleccion).not.toBeNull()
})