const mongoose = require('mongoose')

const FarmaciaSchema = new mongoose.Schema({
    cnpj: String,
    nome: String,
    latitude: Number,
    longitude: Number,
    endereco: String,
    bairro: String,
    cep: String,
    cidade: String,
    UF: String
})

module.exports = mongoose.model('Farmacia', FarmaciaSchema)