const mongoose = require('mongoose')

const FarmaciaSchema = new mongoose.Schema({
    cnpj: String,
    nome: String,
    latitude: String,
    longitude: String,
    endereco: String,
    bairro: String,
    cep: String,
    cidade: String,
    UF: String
})

module.exports = mongoose.model('Farmacia', FarmaciaSchema)