const express = require('express');
const router = express.Router();
const estadosController = require('../controllers/estadosController')

router.get('/verEstado/:idEstado', estadosController.verEstado)

module.exports = router;