let db = require('../config/db.js')

const getFAQList = () => db

const setFAQ = FAQobject => {
  db.push(FAQobject)
  return db
}

module.exports = {
  getFAQList,
  setFAQ
}
