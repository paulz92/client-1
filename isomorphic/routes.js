const routes = require('next-routes')()

routes
  .add('Car', '/car/:name')
  .add('Home', '/')
  .add('Marketplace', '/marketplace')
  .add('Profile', '/profile')
  .add('About', '/about')
  .add('Meetups', '/meetups')

module.exports = routes
