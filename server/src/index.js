const app = require('./app')
const {clearDataBase,loadData} = require('./utils/dataloader')



const PORT = 3000 | process.env.PORT

setInterval( async () => {
    await clearDataBase
    await loadData
    console.log('Loaded new Data');
    
},30000)

app.listen(PORT, (req,res) => {
    console.log('express server is up!');
})