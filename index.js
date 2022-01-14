const express = require('express');
require('dotenv').config();
const cors = require("cors");
const jwt = require('jsonwebtoken')
const config = require('./config/config')
const {checkApiKey} = require('./middlewares/auth.handler')
const { crearConexion, cerrarConexion } = require('./config/conn.js')

const app = express();

app.set('llave', config.llave);

app.use(express.urlencoded({ extended: true }));


const port = process.env.APP_PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  // const rescon = crearConexion();
  // const resclo = cerrarConexion();
  res.json({mensaje: 'cia2 - NodeJS Backend'})
})

app.get('/:id', checkApiKey, (req,res) => {
  const { id } = req.params;
  res.json({mensaje: 'archivo encontrado: '})
})

app.post('/JSON/ejemploRespuestaSuccess_json.html', (req, res) => {

  const {username, password, captcha} = req.body

  if(username !="" && password !="" ){	
    if( username !== ''){
      res.json({ 'logged': false, 'msg': 'Debe escribir su nombre de usuario', 'JWT': 'JWT' });
    }else if (password !== ''){
      res.json({ 'logged': false, 'msg': 'Debe escribir su contraseña', 'JWT': 'JWT' });
    }else{

    }
  }
})

app.listen(port, () => {
  console.log('servidor ON en puerto: ' + port)
})
