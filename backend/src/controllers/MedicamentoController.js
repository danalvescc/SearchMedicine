const Medicamento = require('../models/Medicamento');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
        res.json(await Medicamento.find())
    },

    async store(req, res) {
        const { id_farmacia, nome, valor } = req.body

        const response = await Medicamento.create({
            id_farmacia,
            nome,
            valor,
            ultima_atualizacao: new Date().toDateString()
        })
    },
}