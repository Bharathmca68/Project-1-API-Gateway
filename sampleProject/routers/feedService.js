require('dotenv').config()
var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')


// const api = apiAdapter(process.env.BASE_URL)
const BASE_URL = 'http://localhost:8000'
const api = apiAdapter(BASE_URL)

router.get('/feeds', async(req, res) => {
    console.log(api)
   await api.get(req.path).then(resp => {
        res.send(resp.data,req.path,"called")
      }).catch(err => {
          console.log(err)
      })
})

router.get('/feeds/:hashtag', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data,req.path,"called")
      })
})

router.post('/feeds', (req, res) => {
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data,req.path,"called")
      })
})

module.exports = router