const boom = require('@hapi/boom');

function checkApiKey(req, res, next){

  const api = req.headers['api'];

  if(api === '123'){
    next();
  }else{
    next(boom.unauthorized());
  }
}

module.exports = { checkApiKey }