(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episodes-detail', {
        url:'/episodes/:id',
        parent: 'yujihomo',
        abstract: true,
        views: {
          '@': {
            templateUrl: 'app/casting/episodes/show/show.tmpl.html',
            controller: 'episodesShowCtrl as vm'
          }
        },
        resolve: {
          episode: ['Episode', '$stateParams', function(Episode, $stateParams) {
            return Episode.get($stateParams.id);
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
