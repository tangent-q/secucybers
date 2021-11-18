const express = require('express')
const router = express.Router()
const service = require('./../services/contacts')

router.post('/get-in-touch/', async function (req, res, next) {
  await service.getInTouch(req.body)
  res.send({})
})

module.exports = router
