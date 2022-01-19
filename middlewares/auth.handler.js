const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken')
const config = require('../config/config');

/**
 * Metodo para validar JWT en caso de acceder a rutas protegidas
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
*/
const checkApiKey = (req, res, next) => {

  if(!req.headers.authorization){
    const error = boom.forbidden('No tienes permiso para acceder a este metodo');
    return res.status(error.output.statusCode).json(error.output.payload);
  }

  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.decode(token, config.TOKEN_SECRET);

  if(!payload) {
    const error = boom.forbidden('No tienes permiso para acceder a este metodo');
    return res.status(error.output.statusCode).json(error.output.payload);
  }

  console.log(payload);
  req.user = payload;
  next();
}

module.exports = { checkApiKey : checkApiKey }