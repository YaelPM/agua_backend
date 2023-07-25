const bd = require('../configMySql')

module.exports = {
    iniciarSesion: (correoElectronico, contrasenia, callback) => {
        let sql = 'SELECT * FROM administrador WHERE correoElectronico = ? AND contrasenia = ?';
        bd.query(sql, [correoElectronico, contrasenia], (err, data) => {
            if (err || data.length === 0) {
                return callback(null);
            } else {
                return callback(data[0]);
            }
        });
    },
    editarPerfil: (idAdministrador, administrador, callback) => {
        let sql = 'UPDATE administrador SET ? WHERE idAdministrador = ?'
        bd.query(sql, [administrador, idAdministrador], (err, data) => {
            if (err) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
    actualizarContrasenia: (idAdministrador, contrasenia, callback) => {
        let sql = 'UPDATE administrador SET contrasenia = ? WHERE idAdministrador = ?'
        bd.query(sql, [contrasenia, idAdministrador], (err, data) => {
            if (err) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
    registrarAdministrador: (administrador, callback) => {
        let sql = 'INSERT INTO administrador SET ?'
        console.log(administrador);
        bd.query(sql, administrador, (err, data) => {
            console.log(err)
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
}