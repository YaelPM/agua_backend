const express = require('express');
const router = express.Router();
const repartidorController = require('../controllers/repartidorController')

router.post('/registrarRepartidor', repartidorController.registrarRepartidor)
router.get('/obtenerRepartidores', repartidorController.obtenerRepartidores)
router.get('/verPedidosRepartidor/:idRepartidor', repartidorController.verPedidosRepartidor)
router.get('/verRepartidor/:idRepartidor', repartidorController.verRepartidor)

module.exports = router;