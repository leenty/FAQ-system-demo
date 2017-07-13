const faq = require('../models/faq.js')
const judgeModel = require('../utils/judgeModel.js')

const getFAQList = ctx => {
  ctx.body = judgeModel.success(faq.getFAQList())
}

const setFAQ = async ctx => {
  const newFAQ = ctx.request.body
  ctx.body = judgeModel.success(await faq.setFAQ(newFAQ))
}

module.exports = {
  getFAQList,
  setFAQ
}