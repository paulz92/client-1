const routes = require('next-routes')()

routes
  .add('Car', '/car/:name')
  .add('Home', '/')
  .add('Login', '/login')
  .add('Marketplace', '/marketplace')
  .add('Profile', '/user/:username')
  .add('Register', '/register')

module.exports = routes
