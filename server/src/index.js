const app = require('./app')
const {clearDataBase,loadData} = require('./utils/dataloader')


const PORT = 3000 | process.env.PORT

app.listen(PORT, (req,res) => {
    console.log('express server is up!');
})