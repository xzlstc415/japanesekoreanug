(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('profile', {
        url:'/profile',
        parent: 'yujihomo',
        views: {
          '@': {
            templateUrl: 'app/profile/profile.tmpl.html',
            controller: 'profileCtrl as vm',
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

  var profileCtrl = function(currentUser) {
    var vm = this;

    vm.currentUser = currentUser.data;
  };

  profileCtrl.$inject = ['currentUser'];

  angular.module('yujihomo')
    .config(stateConfig)
    .controller('profileCtrl', profileCtrl);
})();
