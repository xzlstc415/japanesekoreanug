(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('about', {
        url:'/about',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/about/about.tmpl.html'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
