const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('blog/blog-detail', '/blog/blog-detail/:id')