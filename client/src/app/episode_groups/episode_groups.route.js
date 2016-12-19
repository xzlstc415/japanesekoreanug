(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episode_groups', {
        url:'/episode_groups',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/episode_groups/episode_groups.tmpl.html',
            controller: 'EpisodeGroupsController as vm'
          }
        },
        resolve: {
          episodeGroups: ['SimilarEpisodeGroup', function(SimilarEpisodeGroup) {
            return SimilarEpisodeGroup.query();
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
