const estadoModel = require('../models/estadosModel')

const verEstado = (req, res) => {
    idEstado = req.params.idEstado
    estadoModel.verEstado(idEstado, (data) => {
        if (data != null) {
            res.send({
                status: true,
                message: 'Se han obtenido el estado exitosamente',
                data: data
            })
        } else {
            res.send({
                status: false,
                message: 'Error',
                errorMessage: 'Error'
            })
        }
    })
}
module.exports={
    verEstado
}