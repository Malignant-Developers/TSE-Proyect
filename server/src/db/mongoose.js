const mongoose = require('mongoose')

//? Mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/malignant-cortes', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})