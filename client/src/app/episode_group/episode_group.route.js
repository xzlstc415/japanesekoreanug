(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episode_group', {
        url:'/episode_group',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/episode_group/episode_group.tmpl.html',
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
