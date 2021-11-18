const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()
const service = require('./../services/contacts')

router.post('/get-in-touch/', upload.none(), async function (req, res, next) {
  await service.getInTouch(req.body)
  res.send({})
})

module.exports = router
