const routes = require('next-routes')()

routes
  .add('Car', '/car/:name')
  .add('Home', '/')
  .add('Login', '/login')
  .add('Marketplace', '/marketplace')
  .add('Profile', '/profile')
  .add('Register', '/register')
  .add('About', '/about')
  .add('Meetups', '/meetups')

module.exports = routes
