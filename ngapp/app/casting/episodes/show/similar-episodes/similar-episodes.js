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
            controller: 'similarEpisodesCtrl as vm'
          }
        },
        resolve: {
          similarEpisodes: ['Episode', 'episode', function(Episode, episode) {
            return Episode.query({ids: episode.data.similar_episode_ids});
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  var similarEpisodesCtrl = function(similarEpisodes) {
    var vm = this;

    vm.similarEpisodes = similarEpisodes.data;
  };

  similarEpisodesCtrl.$inject = ['similarEpisodes'];

  angular.module('yujihomo')
    .config(stateConfig)
    .controller('similarEpisodesCtrl', similarEpisodesCtrl);
})();
