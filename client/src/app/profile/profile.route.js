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
              currentUser: ['Auth', function(Auth) {
                return Auth.getCurrentUser();
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
