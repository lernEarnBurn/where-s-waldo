var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var gameRouter = require('./routes/game');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', gameRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
})

module.exports = app;
