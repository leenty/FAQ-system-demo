const FAQ = require('../models/FAQ.js')
const judge = require('../utils/judgeModel.js')

const FAQList = async ctx => {
  ctx.body = judge.success(await FAQ.List())
}

const FAQTitleList = async ctx => {
  ctx.body = judge.success(await FAQ.TitleList())
}

const createFAQ = async ctx => {
  let FAQobject = ctx.request.body
  let title = await FAQ.TitleList()
  console.log(title.indexOf(FAQobject.title))

  FAQobject.title.trim() &&
  title.indexOf(FAQobject.title) < 0
    ? ctx.body = judge.success(await FAQ.create(FAQobject))
    : ctx.body = judge.fail('新建FAQ的标题为空或已存在！')
}

const updateFAQ = async ctx => {
  let FAQobject = ctx.request.body
  const index = ctx.params.index

  if (!FAQobject.title.trim()) {
    ctx.body = judge.fail('更新FAQ的标题为空！')
    return 
  }

  FAQobject.content.trim()
    ? ctx.boxy = judge.success(await FAQ.update(index, FAQobject))
    : ctx.body = judge.fail('更新FAQ的内容为空！')
}

const delFAQ = async ctx => {
  const index = ctx.params.index

  ctx.boxy = judge.success(await FAQ.del(index))
}

module.exports = {
  FAQList,
  FAQTitleList,
  createFAQ,
  updateFAQ,
  delFAQ
}