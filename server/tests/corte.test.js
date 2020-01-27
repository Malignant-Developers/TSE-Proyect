const request = require('supertest')
const app = require('../src/app')
const Corte = require('../src/models/corte')
const {setDataBase, corteId, corte} = require('./fixtures/db')

//* Before any test
beforeEach(setDataBase)

test('Should return the Corte Data', async() => {
    const response = await request(app)
    .get('/corte')
    .expect(200)
    
    const corte = await Corte.findById(response.body[0]._id)
    expect(corte).not.toBeNull()
})