(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('schedule', {
        url:'/schedule',
        parent: 'yujihomo',
        data: {
          roles: ['admin', 'user', 'moderator']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/schedule/schedule.tmpl.html',
            controller: 'ScheduleController as vm'
          }
        },
        resolve: {
          currentUser: ['User', function(User) {
            return User.currentUser();
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo')
    .config(stateConfig);
})();
