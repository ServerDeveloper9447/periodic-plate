const data = require('./data.json')
function find(dt) {
  if (isNaN(dt)) {
    var rt = data.filter(x => x.name.toLowerCase() === dt.toLowerCase())[0]
    if (!rt) {
      throw "Data not found"
    } else {
      return rt
    }
  } else {
    var rt = data.filter(x => x.number === Number(dt))[0]
    if (!rt) {
      throw "Data not found"
    } else {
      return rt
    }
  }
}

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(8000)