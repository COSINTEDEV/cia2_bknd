const { auth } = require('../../config/db')
const jwt = require('jsonwebtoken')
const moment = require('moment')
require('dotenv').config();


  const crearToken = (user) => {
    const payload = {
      usuarioId : user.id,
      createdAt: moment().unix(),
      expiredAt: moment().add(1, 'week').unix() 
    }
    return jwt.sign(payload, '18948941')
  }

  const encontrarUno = (username, password, captcha) => {
    const user = auth.findOne({
      where:{
        usuario: username
      } 
    });

    return user;
  }

module.exports = { crearToken, encontrarUno }