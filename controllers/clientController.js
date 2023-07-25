const clientModel = require('../models/clientModel')

const registrarCliente = (req, res) => {
    const cliente = {
        nombre: req.body.nombre,
        correoElectronico: req.body.correoElectronico,
        contrasenia: req.body.contrasenia,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
    }
    clientModel.registrarCliente(cliente, (data) => {
        if(data!=null){
            res.send({
                status: true,
                message: 'Cliente creado exitosamente',
                data: cliente
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
    clientModel.iniciarSesion(req.params.correoElectronico, req.params.contrasenia, (data) => {
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
    const cliente = {
        nombre: req.body.nombre,
        correoElectronico: req.body.correoElectronico,
        contrasenia: req.body.contrasenia,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
    }
    clientModel.editarPerfil(req.params.idCliente, cliente, (data) => {
        try {
            res.send({
                status: true,
                message: 'Cliente actualizado exitosamente',
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
    const idCliente = req.body.idCliente
    const contrasenia = req.body.contrasenia
    
    clientModel.actualizarContrasenia(idCliente, contrasenia, (data) => {
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
    registrarCliente,
    editarPerfil,
    actualizarContrasenia
}