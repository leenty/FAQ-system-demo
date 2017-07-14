const dbModel = require('../config/db.js')
let Content = dbModel('content')
let Title = dbModel('title')

const List = async () => await Content.read()

const TitleList =async () => await Title.read()

const create = async FAQobject => await Content.create(FAQobject)

const update = async (index, FAQobject) => await Content.update(index, FAQobject)

const del = async (index) => await Content.del(index)

module.exports = {
  List,
  TitleList,
  create,
  update,
  del
}
