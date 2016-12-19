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
            controller: 'EpisodeGroupController as vm'
          }
        },
        resolve: {
          episodeTypes: ['EpisodeType', function(EpisodeType) {
            return EpisodeType.query();
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
