const {clearDataBase, loadData} = require('../src/utils/dataloader')
const sampleData = require('../tests/fixtures/sample-data.json')

beforeEach(() => {
  clearDataBase()
  require('../src/db/mongoose')
})
jest.setTimeout(60000)
test('Should write all data into database', async () => {     
   const response = await loadData() 
   expect(response).toBe(201)
})