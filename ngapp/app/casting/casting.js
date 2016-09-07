(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        parent: 'yujihomo',
        views: {
          '@': {
            templateUrl: 'app/casting/casting.tmpl.html'
          },
          'side-bar@home': {
            templateUrl: 'app/casting/side-bar/side-bar.tmpl.html'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();