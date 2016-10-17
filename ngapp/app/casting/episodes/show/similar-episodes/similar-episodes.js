(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episodes-similar-ep', {
        url:'/similar-episodes',
        parent: 'episodes-detail',
        views: {
          'similar-episodes@episodes-detail': {
            templateUrl: 'app/casting/episodes/show/similar-episodes/similar-episodes.tmpl.html'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
