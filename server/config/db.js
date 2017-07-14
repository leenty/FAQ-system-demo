const {join} = require('path')
const {writeFileSync} = require('fs')

const dbPath = {
  title: './db_title.json',
  content: './db_content.json'
}

let cache = {
  content: require(dbPath.content) || [],
  title: require(dbPath.title) || []
}

const save = function () {
  writeFileSync(join(__dirname, dbPath.content), JSON.stringify(cache.content, null, 2))
  writeFileSync(join(__dirname, dbPath.title), JSON.stringify(cache.title, null, 2))
}

const filter = function (obj) {
  return {
    title: obj.title,
    content: obj.content
  }
}

const create = function (field) {
  field = filter(field)
  cache.content.push(field)
  cache.title.push(field.title)
  save()
  return cache
}

const update = function (index, field) {
  field = filter(field)
  cache.content.splice(index, 1, field)
  cache.title.splice(index, 1, field)
  save()
  return cache
}

const findByIndex = function (table, index) {
  return cache[table][index]
}

const read = function (table) {
  return cache[table]
}

const del = function (index) {
  cache.content.splice(index, 1)
  cache.title.splice(index, 1)
  save()
  return cache
}

const dbModel = function (table) {
  return {
    create, // args: <field>
    update, // args: <index>, <field>
    findByIndex () { // args: <index>
      return findByIndex(table)
    },
    read () { // args: null
      return read(table)
    },
    del // args: <index>
  }
}

module.exports = dbModel