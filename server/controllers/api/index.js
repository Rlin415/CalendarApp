var express = require('express');
var event = require('./event.controller');

var apiRouter = express.Router();

apiRouter.get('/events', event.getEvents);
apiRouter.post('/event', event.createEvent);
apiRouter.put('/event', event.updateEvent);
apiRouter.delete('/event/:id', event.deleteEvent);

module.exports = apiRouter;
