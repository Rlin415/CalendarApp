var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  title: String,
  description: String
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
