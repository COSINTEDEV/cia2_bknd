const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken')
require('dotenv').config();


function checkApiKey(req, res, next){

  const tkn = req.headers['token'];

  if(tkn){
    
    // console.log(tkn)
    try {      
      
      
      let payload = jwt.decode( tkn, '18948941')
    
      console.log('se desencripta jwt')
    
    } catch (error) {
      return res.json({error: 'token incorrecto'})
    }
    next();
  }else{
    next(boom.unauthorized());
  }
}

module.exports = { checkApiKey : checkApiKey }