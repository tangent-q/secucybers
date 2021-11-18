const cors = require('cors')
const express = require('express')
require('express-async-errors')
const logger = require('morgan')

const index = require('./routes/index')

const app = express()

app.use(cors()) // TODO: Fix This

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', index)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send('Not Found')
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err)
  res.status(err.status || 500).send('Something went wrong')
})

module.exports = app
