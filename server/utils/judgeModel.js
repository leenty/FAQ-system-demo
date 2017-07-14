class judgeModel {
  constructor (model) {
    this.data = model.data
    this.status = model.status
    this.message = model.message
  }
  judge () {
    return this.status === 200 || this.status === true
  }
}

const judge = function (returnModel) {
  return returnModel.judge()
}

const success = function (data = {}, message = '', status = 200) {
  return new judgeModel({
    data,
    status,
    message
  })
}

const fail = function (message = '', status = 403, data = {}) {
  return new judgeModel({
    data,
    status,
    message
  })
}

module.exports = {
  success,
  fail
}