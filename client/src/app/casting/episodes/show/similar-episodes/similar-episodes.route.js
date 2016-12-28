(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episodes-similar-ep', {
        url:'/similar-episodes',
        parent: 'episodes-detail',
        views: {
          'similar-episodes@episodes-detail': {
            templateUrl: 'app/casting/episodes/show/similar-episodes/similar-episodes.tmpl.html',
            controller: 'SimilarEpisodesController as vm'
          }
        },
        resolve: {
          similarEpisodes: ['Episode', 'episode', function(Episode, episode) {
            var simiarEpisodeIds = episode.data.similar_episode_ids;
            if (simiarEpisodeIds.length === 0) { simiarEpisodeIds = [0]; }
            return Episode.query({'id_in[]': simiarEpisodeIds});
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo')
    .config(stateConfig);
})();
