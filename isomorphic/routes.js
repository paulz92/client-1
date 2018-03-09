const routes = require('next-routes')()

routes
  .add('/', '/', 'home', 'profile')

module.exports = routes
