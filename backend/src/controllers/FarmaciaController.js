const Farmacia = require('../models/Farmacia');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
        const arr = await Farmacia.find()
        res.json(arr)
    },

    async store(req, res) {
        try {
            const { cnpj, latitude, longitude, nome, endereco, bairro, cep, cidade, UF } = req.body

            const id = crypto.randomBytes(4).toString('HEX')

            const response = await Farmacia.create({
                cnpj,
                latitude,
                longitude,
                nome,
                endereco,
                bairro,
                cep,
                cidade,
                UF
            })

            res.json(response)

        } catch (error) {
            res.status(404).json(error)
        }

    },
}