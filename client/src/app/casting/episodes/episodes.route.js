(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episodes-detail', {
        url:'/episodes/:id',
        parent: 'yujihomo',
        abstract: true,
        views: {
          '@yujihomo': {
            templateUrl: 'app/casting/episodes/show/show.tmpl.html',
            controller: 'EpisodesShowController as vm'
          }
        },
        resolve: {
          episode: ['Episode', '$stateParams', function(Episode, $stateParams) {
            return Episode.get($stateParams.id);
          }]
        }
      })
      .state('episodes-create', {
        url:'/episodes/new',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/casting/episodes/create/create.tmpl.html',
            controller: 'EpisodesCreateController as vm'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
