const koaRouter = require('koa-router')
const router = new koaRouter()
const staticServe = require('koa-static')

const FAQ = require('../controllers/faq.js')

router.use('/api', group(route => {
  route.get('/faq', FAQ.getFAQList)
}))
router.use('/admin_api', group(route => {
  route.post('/faq', FAQ.setFAQ)
}))
// router.use('/', group(route => {
//   route.get('*', staticServe('../../dist'))
// }))

function group(routes) {
  const group = new koaRouter()
  routes(group)
  return group.routes()
}

module.exports = router
