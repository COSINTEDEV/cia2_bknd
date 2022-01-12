const express = require('express');

const app = express();

const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({mensaje: 'Bienvenidos al cia2 SOLO'})
})

app.listen(port, () => {
  console.log('servidor ON en puerto: ' + port)
})
