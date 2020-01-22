const express = require('express')
const app = express()

//? Import the router
const corteRouter = require('./routes/cortes')
//! Start Mongoose connection
require('./db/mongoose')
//! Parse responses into json
app.use(express.json())
//! Routers
app.use(corteRouter)

module.exports = app