const express = require('express')
// const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {crearToken, encontrarUno} = require('../../services/auth/auth')


const router = express.Router()

router.post('/', async (req, res) => {
  const {username, password, captcha} = req.body

  if(username === ''){
    res.json({
      logged: false,
      msg: 'Debe escribir su nombre de usuario',
      JWT: 'JWT'        
    })
    // throw boom.badRequest('Debe escribir su nombre de usuario')
  }else if(password === ''){
    res.json({
      logged: false,
      msg: 'Debe escribir su contraseña',
      JWT: 'JWT'        
    })
    // throw boom.badRequest('Debe escribir su contraseña')
  }else{
    encontrarUno(username, password, captcha)
      .then( user => {
        if(user){
          const validatePass = bcrypt.compare(password, user.contrasena)
          // bcrypt.compareSync(password, user.contrasena)
          if(validatePass){
            res.json({
              logged: true,
              msg: 'ok',
              JWT: crearToken(user),
              user: user        
            })
          }else{
            res.json({ error: 'contraseña inválida'})
          }
      
        }else{
          res.json({ error: 'Error en usuario y/o contraseña.'})
        }
      })
  }
})


module.exports = router