const express = require('express')
const router = express.Router()
const pkg = require('../package.json')
const contact = require('./contact')

router.get('/', function (req, res) {
  res.send({ name: pkg.name, version: pkg.version })
})

router.use('/get-in-touch/', contact)

module.exports = router
