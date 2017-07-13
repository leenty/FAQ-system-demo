const koaRouter = require('koa-router')
const router = new koaRouter()

const FAQ = require('../controllers/faq.js')

router.use('', group(route => {
  route.get('/', ctx => {
    console.log('get!!!')
    ctx.body = 'get!!!!'
  })
  route.get('/faq', FAQ.getFAQList)
}))
router.use('/admin', group(route => {
  route.post('/faq', FAQ.setFAQ)
}))

function group(routes) {
  const group = new koaRouter()
  routes(group)
  return group.routes()
}

module.exports = router
