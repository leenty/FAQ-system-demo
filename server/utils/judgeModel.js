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

const success = function (data = {}, msg = '') {
  return new judgeModel({
    data: data,
    status: 200,
    message: msg
  })
}

const fail = function (data = {}, msg = '') {
  return new judge({
    data: data,
    status: 403,
    message: msg
  })
}

module.exports = {
  success,
  fail
}