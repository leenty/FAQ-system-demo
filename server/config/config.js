module.exports = {
  'development': {
    'port': '8889',
    'token_secret': 'xkeshi-faq',
    'allowOrigin': '*',
    'allowHeaders': ['Authorization', 'Content-Type'],
    'allowMethods': ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    'maxAge': 60 * 60 * 24,
    'credentials': true
  },
  'test': {
    'port': '8889',
    'token_secret': 'xkeshi-faq',
    'allowOrigin': '*',
    'allowHeaders': ['Authorization'],
    'allowMethods': ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    'maxAge': 60 * 60 * 24,
    'credentials': true
  },
  'production': {
    'port': '80',
    'token_secret': 'xkeshi-faq',
    'allowOrigin': ['http://www.leenty.com', 'http://leenty.com', 'http://vue2.leenty.com'],
    // 'allowHeaders': ['Content-Type', 'Authorization', 'X-Requested-With', 'emulateJSON', 'crossOrigin'],
    'allowHeaders': ['Authorization'],
    'allowMethods': ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    'maxAge': 60 * 60 * 24,
    'credentials': true
  }
}