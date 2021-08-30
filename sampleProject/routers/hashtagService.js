var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8088'
const api = apiAdapter(BASE_URL)

router.get('/hashtags',async (req, res) => {
  await api.get(req.path).then(resp => {
    res.send(resp.data)
  }).catch(err => {
      console.log("error")
  })
})

router.get('/hashtags/:name', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router