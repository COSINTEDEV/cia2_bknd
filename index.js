const express = require('express');
require('dotenv').config();
const cors = require("cors");
const config = require('./config/config')
const {checkApiKey} = require('./middlewares/auth.handler')
const routerAPI = require('./api') 


const app = express();

app.set('llave', config.llave);

app.use(express.urlencoded({ extended: true }));


const port = process.env.APP_PORT || 3001;

app.use(express.json());

require('./config/db')
routerAPI(app)

app.get('/', (req, res) => {
  res.json({mensaje: 'cia2 - NodeJS Backend'})
})


app.listen(port, () => {
  console.log('servidor ON en puerto: ' + port)
})
