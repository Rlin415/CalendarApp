(function() {

  angular.module('calendar.event')
    .controller('EventController', EventController);

  function EventController(eventService) {
    var vm = this;

    vm.events = {};
    vm.title = null;
    vm.description = null;
    vm.change = null;
    vm.create = create;
    vm.edit = edit;
    vm.update = update;
    vm.remove = remove;

    get();

    function get() {
      eventService.getEvents()
        .then(function(events) {
          vm.events = events;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

    function create() {
      eventService.createEvent({
        title: vm.title,
        description: vm.description
      })
      .then(function(event) {
        vm.events[event._id] = event;
        vm.title = null;
        vm.description = null;
      })
      .catch(function(err) {
        console.error(err);
      });
    }

    function edit(item) {
      vm.change = item;
    }

    function remove(event) {
      eventService.deleteEvent(event._id)
        .then(function() {
          delete vm.events[event._id];
          vm.change = null;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

    function update(event) {
      eventService.updateEvent(event)
        .then(function() {
          vm.change = null;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

  }

})();
