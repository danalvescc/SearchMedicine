const express = require('express');
const FarmaciaController = require('./controllers/FarmaciaController');
const MedicamentoController = require('./controllers/MedicamentoController');

const routes = new express.Router();

routes.post('/api/farmacia', FarmaciaController.store)
routes.get('/api/farmacia', FarmaciaController.index)

routes.post('/api/medicamento', MedicamentoController.store)
routes.get('/api/medicamento', MedicamentoController.index)

module.exports = routes