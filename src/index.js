const app = require('./app')
const {clearDataBase,loadData} = require('./utils/dataloader')


setInterval(async () => {
    await clearDataBase()
    await loadData()
    console.log('Loaded Data');
}, 30000);

const PORT = process.env.PORT

app.listen(PORT, (req,res) => {
    console.log('express server is up! at localhost:'+ PORT);
})