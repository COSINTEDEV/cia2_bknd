const mysql = require('mysql');
require('dotenv').config();


const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});

const crearConexion = () => {
    const cc = conn.connect((err) => {
        if (err) throw err;
    });
    return 'Se abre la conexion';
}

const cerrarConexion = () => {
    const cc = conn.end((err) => {
        if (err) throw err;
    });
    return 'Se ha cerrado la conexion';
}

module.exports = {
    crearConexion,
    cerrarConexion
}