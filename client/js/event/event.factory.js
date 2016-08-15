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
      })
      .catch(function(err) {
        console.error(err);
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
      })
      .catch(function(err) {
        console.error(err);
      });
    }

    function updateEvent(event) {
      return $http({
        method: 'PUT',
        url: '/api/event',
        data: event
      })
      .catch(function(err) {
        console.error(err);
      });
    }

    function deleteEvent(id) {
      return $http({
        method: 'DELETE',
        url: '/api/event/' + id
      })
      .catch(function(err) {
        console.error(err);
      });
    }
  }

})();
