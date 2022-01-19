const express = require('express')
const router = express.Router()


router.post('/',(req, res) => {
    res.json({
      data: [
        {
          id: '1',
          titulo: 'x1'
        },
        {
          id: '2',
          titulo: 'x2'
        },
        {
          id: '3',
          titulo: 'x3'
        },
        {
          id: '4',
          titulo: 'x4'
        }
      ]
    }) 

})

module.exports = router