const mysql = require('mysql');

// without password
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Recargas'
});

conn.connect((error) => {
    if (error) {
        console.log('Error al conectar con la base de datos');
    } else {
        console.log('Conectado a la base de datos')
    }
});

module.exports = conn;