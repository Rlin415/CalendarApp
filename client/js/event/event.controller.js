(function() {

  angular.module('calendar.event')
    .controller('EventController', EventController);

  function EventController(eventService) {
    var eventVm = this;

    eventVm.events = {};
    eventVm.title = null;
    eventVm.description = null;
    eventVm.change = null;
    eventVm.createEvent = createEvent;
    eventVm.editEvent = editEvent;
    eventVm.updateEvent = updateEvent;
    eventVm.removeEvent = removeEvent;

    getEvents();

    function getEvents() {
      eventService.getEvents()
        .then(function(events) {
          eventVm.events = events;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

    function createEvent() {
      eventService.createEvent({
        title: eventVm.title,
        description: eventVm.description
      })
      .then(function(event) {
        eventVm.events[event._id] = event;
        eventVm.title = null;
        eventVm.description = null;
      })
      .catch(function(err) {
        console.error(err);
      });
    }

    function editEvent(item) {
      eventVm.change = item;
    }

    function removeEvent(event) {
      eventService.deleteEvent(event._id)
        .then(function() {
          delete eventVm.events[event._id];
          eventVm.change = null;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

    function updateEvent(event) {
      eventService.updateEvent(event)
        .then(function() {
          eventVm.change = null;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

  }

})();
