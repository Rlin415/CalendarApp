(function() {

  angular.module('calendar.event')
    .factory('eventService', eventService);


  function eventService($http) {

    return {
      getEvents,
      createEvent,
      updateEvent,
      deleteEvent
    };


    function getEvents() {
      return $http({
        method: 'GET',
        url: '/api/events'
      })
      .then(function(res) {
        return res.data;
      });
    }

    function createEvent(event) {
      return $http({
          method: 'POST',
          url: '/api/event',
          data: event
      })
      .then(function(res) {
        return res.data;
      });
    }

    function updateEvent(event) {
      return $http({
        method: 'PUT',
        url: '/api/event',
        data: event
      });
    }

    function deleteEvent(id) {
      return $http({
        method: 'DELETE',
        url: '/api/event/' + id
      });
    }

  }

})();
