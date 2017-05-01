(function() {
  'use strict';

  var ugWaypoint = function($timeout, Waypoint) {
    var link = function(scope, element, attr) {
      $timeout(function() {
        new Waypoint({
          element: element[0],
          handler: function(direction) {
            if (direction == "down") {
              element.addClass("sticky");
            } else {
              element.removeClass("sticky");
            }
          },
          offset: attr.waypointOffset
        })
      }, 800);
    }
    return {
      restrict: "A",
      link: link
    };
  };

  ugWaypoint.$inject = ['$timeout', 'Waypoint'];

  angular.module('yujihomo').directive('ugWaypoint', ugWaypoint);
})();
