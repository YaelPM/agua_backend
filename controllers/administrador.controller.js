const AdministradorModel = require('../models/administrador.model')

const registrarAdministrador = (req, res) => {
    const Administrador = {
        nombre: req.body.nombre,
        correoElectronico: req.body.correoElectronico,
        contrasenia: req.body.contrasenia,
    }
    AdministradorModel.registrarAdministrador(Administrador, (data) => {
        if(data!=null){
            res.send({
                status: true,
                message: 'Administrador creado exitosamente',
                data: Administrador
            })
        }else{
            res.send({
                status: false,
                message: 'Verifique si los datos están completos',
                errorMessage: error
            })
        }
    })
}
const iniciarSesion = (req, res) => {
    AdministradorModel.iniciarSesion(req.params.correoElectronico, req.params.contrasenia, (data) => {
        try {
            res.send({
                status: true,
                message: 'Inicio de sesión existoso',
                data: data
            })
        } catch (error) {
            res.send({
                status: false,
                message: 'Verifique si los datos están completos',
                errorMessage: error
            })

        }
    })
}
const editarPerfil = (req, res) => {
    const Administrador = {
        nombre: req.body.nombre,
        correoElectronico: req.body.correoElectronico,
        contrasenia: req.body.contrasenia
    }
    AdministradorModel.editarPerfil(req.params.idAdministrador, Administrador, (data) => {
        try {
            res.send({
                status: true,
                message: 'Administrador actualizado exitosamente',
                data: data
            })
        } catch (error) {
            res.send({
                status: false,
                message: 'Hubo un error al actualizar los datos',
                errorMessage: error
            })

        }
    })
}
const actualizarContrasenia = (req, res) => {
    const idAdministrador = req.body.idAdministrador
    const contrasenia = req.body.contrasenia
    
    AdministradorModel.actualizarContrasenia(idAdministrador, contrasenia, (data) => {
        try {
            res.send({
                status: true,
                message: 'Contraseña actualizada exitosamente',
                data: data
            })
        } catch (error) {
            res.send({
                status: false,
                message: 'Hubo un error al actualizar la contraseña',
                errorMessage: error
            })

        }
    })
}
module.exports = {
    iniciarSesion,
    registrarAdministrador,
    editarPerfil,
    actualizarContrasenia
}