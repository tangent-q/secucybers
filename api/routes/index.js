const express = require('express')
const router = express.Router()
const pkg = require('../package.json')
const contacts = require('./contacts')

router.get('/', function (req, res) {
  res.send({ name: pkg.name, version: pkg.version })
})

router.use('/contacts/', contacts)

module.exports = router
