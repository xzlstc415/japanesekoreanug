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
            templateUrl: 'app/casting/casting.tmpl.html'
          },
          'side-bar@episodes-detail': {
            templateUrl: 'app/casting/side-bar/side-bar.tmpl.html',
            controller: 'SidebarController as vm',
            resolve: {
              tags: ['Tag', function(Tag) {
                return Tag.query();
              }],
              episodeTypes: ['EpisodeType', function(EpisodeType) {
                return EpisodeType.query();
              }]
            }
          },
          'episodes@episodes-detail': {
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
        data: {
          roles: ['admin', 'moderator']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/casting/episodes/create/create.tmpl.html',
            controller: 'EpisodesCreateController as vm'
          }
        },
        resolve: {
          episodeTypes: ['EpisodeType', function(EpisodeType) {
            return EpisodeType.query();
          }]
        }
      })
      .state('episodes-update', {
        url:'/episodes/:id/edit',
        parent: 'yujihomo',
        data: {
          roles: ['admin', 'moderator']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/casting/episodes/edit/edit.tmpl.html',
            controller: 'EpisodesUpdateController as vm'
          }
        },
        resolve: {
          episode: ['Episode', '$stateParams', function(Episode, $stateParams) {
            return Episode.get($stateParams.id);
          }],
          episodeTypes: ['EpisodeType', function(EpisodeType) {
            return EpisodeType.query();
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
