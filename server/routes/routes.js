const koaRouter = require('koa-router')
const router = new koaRouter()
const staticServe = require('koa-static')

const FAQ = require('../controllers/faq.js')

router.use('/api', group(route => {
  route.get('/faq', FAQ.FAQList)
  route.get('/faq_title', FAQ.FAQTitleList)
}))
router.use('/admin_api', group(route => {
  route.post('/faq', FAQ.createFAQ)
  route.put('/faq/:index', FAQ.updateFAQ)
  route.del('/faq/:index', FAQ.delFAQ)
}))

function group(routes) {
  const group = new koaRouter()
  routes(group)
  return group.routes()
}

module.exports = router
