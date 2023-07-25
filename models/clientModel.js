const bd = require('../configMySql')

module.exports = {
    iniciarSesion: (correoElectronico, contrasenia, callback) => {
        let sql = 'SELECT * FROM cliente WHERE correoElectronico = ? AND contrasenia = ?';
        bd.query(sql, [correoElectronico, contrasenia], (err, data) => {
            if (err || data.length === 0) {
                return callback(null);
            } else {
                return callback(data[0]);
            }
        });
    },
    editarPerfil: (idCliente, cliente, callback) => {
        let sql = 'UPDATE cliente SET ? WHERE idCliente = ?'
        bd.query(sql, [cliente, idCliente], (err, data) => {
            if (err) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
    actualizarContrasenia: (idCliente, contrasenia, callback) => {
        let sql = 'UPDATE cliente SET contrasenia = ? WHERE idCliente = ?'
        bd.query(sql, [contrasenia, idCliente], (err, data) => {
            if (err) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
    registrarCliente: (cliente, callback) => {
        let sql = 'INSERT INTO cliente SET ?'
        console.log(cliente);
        bd.query(sql, cliente, (err, data) => {
            console.log(err)
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
}