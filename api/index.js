const express = require('express');
const {checkApiKey} = require('../middlewares/auth.handler')
const authRoute = require('../api/auth.js/auth')
const estudiosRoutes = require('../api/estudios/estudios')

function routerAPI(app){
  const router = express.Router()
  app.use('/api/v1', router);
  router.use('/login',  authRoute)
  router.use('/estudios', checkApiKey, estudiosRoutes)
}

module.exports = routerAPI