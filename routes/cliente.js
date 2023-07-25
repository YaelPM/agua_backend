const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController')

router.post('/registrarCliente', clientController.registrarCliente)
router.get('/iniciarSesion/:correoElectronico/:contrasenia', clientController.iniciarSesion)
router.put('/editarPerfil/:idCliente', clientController.editarPerfil)
router.put('/actualizarContrasenia', clientController.actualizarContrasenia)

module.exports = router;