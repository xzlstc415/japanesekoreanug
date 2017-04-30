(function() {

  var waypointWrapper = function($window) {
    return $window.Waypoint;
  };

  waypointWrapper.$inject = ['$window'];

  angular.module('yujihomo')
    .factory('Waypoint', waypointWrapper);
})();
