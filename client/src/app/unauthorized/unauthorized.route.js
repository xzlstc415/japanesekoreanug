(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('unauthorized', {
        url:'/unauthorized',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/unauthorized/unauthorized.tmpl.html'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo')
    .config(stateConfig);
})();
