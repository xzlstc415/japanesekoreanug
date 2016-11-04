(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('profile', {
        url:'/profile',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/profile/profile.tmpl.html',
            controller: 'ProfileController as vm',
            resolve: {
              currentUser: ['$auth', function($auth) {
                return $auth.getPayload();
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
