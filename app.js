const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
var path = require('path');

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

// simple routes
var indexRouter = require('./routes/index')
var songsRouter = require('./routes/songs')


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)
app.use('/songs', songsRouter)

module.exports = app
