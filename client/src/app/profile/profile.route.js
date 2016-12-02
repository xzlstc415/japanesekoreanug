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
              currentUser: ['$auth', function($auth) {
                if ($auth.isAuthenticated()) {
                  return $auth.getPayload();
                } else {
                  return null;
                }
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
