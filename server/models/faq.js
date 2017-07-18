const {questions: Questions, classes: Classes} = require('../db/models/index.js')

const dbModel = require('../config/db.js')
let Content = dbModel('content')
let Title = dbModel('title')

// const List = async () => await Content.read()
// const List = async () => await Classes.findByOne({
//   where: {id: 1},
//   attributes: ['name', 'sup_class_id', 'group']
// })
const List = async () => {
  const classes = await Classes.findAll({
    attributes: ['name', 'sup_class_id', 'group', 'id']
  })
  // const classes = await Classes.findById(1)
  console.log(classes)
  return classes
}

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
