(function() {

  angular.module('calendarApp')
    .controller('EventController', EventController);

  function EventController($scope, eventService) {
    var vm = this;
    vm.events = {};
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
        });
    }

    function create() {
      eventService.createEvent({
        title: vm.title,
        description: vm.description
      })
      .then(function(event) {
        vm.events[event._id] = event;
      });
    }

    function edit(item) {
      vm.change = item;
    }

    function remove(event) {
      vm.change = null;
      eventService.deleteEvent(event._id)
        .then(function() {
          delete vm.events[event._id];
        });
    }

    function update(event) {
      vm.change = null;
      eventService.updateEvent(event);
    }

  }

})();
