(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('schedule', {
        url:'/schedule',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/schedule/schedule.tmpl.html',
            controller: 'ScheduleController as vm'
          }
        },
        resolve: {
          events : ['Event', function(Event) {
            return Event.query();
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo')
    .config(stateConfig);
})();
