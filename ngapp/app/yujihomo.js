(function() {
  'use strict';

  var stateConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('yujihomo', {
        abstract: true,
        views: {
          'header@': {
            templateUrl: 'app/header/header.tmpl.html',
            controller: 'headerCtrl as vm'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  };
  stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  var locationConfig = function($locationProvider) {
    $locationProvider.html5Mode(true);
  };
  locationConfig.$inject = ['$locationProvider'];

  angular.module('yujihomo', [
    'ngAnimate',
    'ui.router'
  ])
  .config(stateConfig)
  .config(locationConfig);
})();
