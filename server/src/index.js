const app = require('./app')
const {clearDataBase,loadData} = require('./utils/dataloader')


setInterval(() => {
    console.log('Rewriting data');
    clearDataBase()
    loadData().then(result => console.log(result))
}, 30000);

const PORT = 3000 | process.env.PORT

app.listen(PORT, (req,res) => {
    console.log('express server is up!');
})