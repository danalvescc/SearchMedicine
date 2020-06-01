const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://admin:0000@searchmedicine-wsdds.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())

app.use(express.json())

app.use(require('./routes'))

app.listen(3333);