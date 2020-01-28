const {clearDataBase, loadData} = require('../src/utils/dataloader')

beforeEach(clearDataBase)

test('Should write all data into database', async () => {   
  const response = await loadData()
  expect(response).toBe(201)
})