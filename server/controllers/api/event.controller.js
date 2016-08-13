var Event = require('../../models').Event;

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};

function getEvents(req, res) {
  Event.find({}, function(err, events) {
    var eventMap = {};

    events.forEach(function(event) {
      eventMap[event._id] = event;
    });

    if (err) {
      console.error(err);
      res.sendStatus(404);
    } else {
      res.send(eventMap);
    }

  });
}

function createEvent(req, res) {
  Event.create({
    title: req.body.title,
    description: req.body.description
  }, function(err, event) {
    if (err) {
      console.error(err);
      res.sendStatus(409);
    } else {
      res.status(201).send(event);
    }
  });
}

function updateEvent(req, res) {
  Event.findByIdAndUpdate(req.body._id, {
    title: req.body.title,
    description: req.body.description
  }, function(err, event) {
    if (err) {
      console.error(err);
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
}

function deleteEvent(req, res) {
  Event.findByIdAndRemove(req.params.id, function(err, event) {
      if (err) {
        console.error(err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
  });
}
