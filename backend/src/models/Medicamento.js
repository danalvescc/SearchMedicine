const mongoose = require('mongoose')

const MedicamentoSchema = new mongoose.Schema({
    id_farmacia: String,
    titulo: String,
    valor: Number,
    ultima_atualizacao: String
})

module.exports = mongoose.model('Medicamentos', MedicamentoSchema)