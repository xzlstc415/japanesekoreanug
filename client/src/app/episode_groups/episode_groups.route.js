(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episode-groups', {
        url:'/episode_groups',
        parent: 'yujihomo',
        data: {
          roles: ['admin']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/episode_groups/index/index.tmpl.html',
            controller: 'EpisodeGroupsIndexController as vm'
          }
        },
        resolve: {
          episodeGroups: ['SimilarEpisodeGroup', function(SimilarEpisodeGroup) {
            return SimilarEpisodeGroup.query();
          }]
        }
      })
      .state('episode-groups-detail', {
        url:'/episode_groups/:id',
        parent: 'yujihomo',
        data: {
          roles: ['admin']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/episode_groups/show/show.tmpl.html',
            controller: 'EpisodeGroupsShowController as vm'
          }
        },
        resolve: {
          episodeGroup: ['SimilarEpisodeGroup', '$stateParams', function(SimilarEpisodeGroup, $stateParams) {
            return SimilarEpisodeGroup.get($stateParams.id);
          }],
          episodes: ['Episode', '$stateParams', function(Episode, $stateParams) {
            return Episode.query({similar_episode_group_id_eq: $stateParams.id});
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
