const Medicamento = require('../models/Medicamento');
const Farmacia = require('../models/Farmacia');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
        let { raio, titulo, latitude, longitude } = req.query

        raio = parseFloat(raio) * 0.01

        titulo = titulo.toUpperCase()

        maxLatitude = parseFloat(latitude) + raio
        maxLongitude = parseFloat(longitude) + raio
        minLatitude = parseFloat(latitude) - raio
        minLongitude = parseFloat(longitude) - raio

        const farmArray = await Farmacia.find({
            "latitude": { $gte: minLatitude, $lte: maxLatitude },
            "longitude": { $gte: minLongitude, $lte: maxLongitude },
        })

        if (farmArray.length) {
            let medicamentoArray = []

            const promises = farmArray.map(async farm => {
                let medicamentoNaFarm = await Medicamento.find({
                    id_farmacia: farm._id,
                    titulo: { $regex: '.*' + titulo + '.*' }
                });
                medicamentoArray = [...medicamentoArray, ...medicamentoNaFarm];
            })

            await Promise.all(promises)

            medicamentoArray.sort(function (a, b) {
                if (a.valor > b.valor) {
                    return 1
                }
                if (a.valor < b.valor) {
                    return -1;
                }
                return 0;
            });

            res.json({
                medicamentos: medicamentoArray,
                farmacias: farmArray
            })

        } else {
            res.json({
                response: "Nenhuma farmácia próxima a você, favor selecionar um raio de maior !"
            })
        }

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
