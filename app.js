const config = require('./server/config')
const app = new (require('koa'))()
const json = require('koa-json')
const staticServe = require('koa-static')
const mount = require('koa-mount')
// const jwt = require('koa-jwt');
const logger = require('koa-logger')
// const cors = require('koa2-cors')
// const uaParser = require('ua-parser-js')

const router = require('./server/routes/routes.js')

app.use(require('koa-bodyparser')())

// app.use(historyApiFallback())

app.use(async ({request, response, url}, next) => {
  let start = new Date()
  await next()
  let ms = new Date() - start
  console.log('%s %s[%s] %s - %sms',
    request.header.host, request.method, response.status, url, ms)
})

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (401 == err.status) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      }
    } else {
      throw err
    }
  }
})

app.on('error', (err, ctx) => {
  console.log('server serror!', err)
})

// app.use(cors({
//   origin: ({ request }) =>
//                 config.allowOrigin.includes('*') &&
//                   '*' ||
//                 config.allowOrigin.includes(request.header.origin) &&
//                   request.header.origin,
//   allowMethods: config.allowMethods,
//   allowHeaders: config.allowHeaders,
//   maxAge:       config.maxAge,
//   credentials:  config.credentials
// }))

app.use(mount('/', staticServe('./frontend')))
app.use(mount('/admin', staticServe('./dist')))
router.get('*', ctx => {
  const path = ctx.request.url.split('/')
  path[1] === 'admin'
    ? ctx.redirect('/admin', 302)
    : ctx.redirect('/', 302)
  ctx.status = 302
  console.log('redirect', path)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port, () => {
  console.log(`server create at http://localhost:${config.port}`)
})
module.exports = app
