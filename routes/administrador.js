const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administrador.controller')

router.post('/registrarAdministrador', administradorController.registrarAdministrador)
router.get('/iniciarSesion/:correoElectronico/:contrasenia', administradorController.iniciarSesion)
router.put('/editarPerfil/:idAdministrador', administradorController.editarPerfil)
router.put('/actualizarContrasenia', administradorController.actualizarContrasenia)

module.exports = router;