(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('profile', {
        url:'/profile',
        parent: 'yujihomo',
        data: {
          roles: ['admin', 'user', 'moderator']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/profile/profile.tmpl.html',
            controller: 'ProfileController as vm',
            resolve: {
              currentUser: ['User', function(User) {
                return User.currentUser();
              }]
            }
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo')
    .config(stateConfig);
})();
