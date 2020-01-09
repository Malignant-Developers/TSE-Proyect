const express = require('express')
const app = express()
//? Port config
const PORT = 3000 | process.env.PORT
//? Import the router
const corteRouter = require('./routes/cortes')
//! Start Mongoose connection
require('./db/mongoose')
//! Parse responses into json
app.use(express.json())
//! Routers
app.use(corteRouter)



app.listen(PORT, (req,res) => {
    console.log('express server is up!');
})
