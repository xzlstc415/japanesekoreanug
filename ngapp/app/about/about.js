(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('about', {
        url:'/about',
        parent: 'yujihomo',
        views: {
          '@': {
            templateUrl: 'app/about/about.tmpl.html'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
