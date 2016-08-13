var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Event = require('./models');
var controllers = require('./controllers');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.json());
app.use(express.static('client'));
app.use(morgan('dev'));

app.set('port', 3000);

mongoose.connect('mongodb://localhost/calendarApp');

app.use('/api', controllers);

app.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});
