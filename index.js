const express = require('express');
require('dotenv').config();
const cors = require("cors");

const { crearConexion, cerrarConexion } = require('./config/conn.js')

const app = express();

const port = process.env.APP_PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  // const rescon = crearConexion();
  // const resclo = cerrarConexion();
  res.json({mensaje: 'cia2 - NodeJS Backend'})
})

app.listen(port, () => {
  console.log('servidor ON en puerto: ' + port)
})
