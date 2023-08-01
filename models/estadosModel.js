const bd = require('../configMySql')

module.exports = {
    verEstado: (idEstado, callback) => {
        let sql = 'SELECT * FROM estadopedido WHERE idEstado = ?';
        bd.query(sql, idEstado, (err, data) => {
            if (err || data.length === 0) {
                return callback(null);
            } else {
                return callback(data[0]);
            }
        });
    },
}