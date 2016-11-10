(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        parent: 'yujihomo',
        params: {
          episode_type_name_eq: null,
          tags_name_eq: null,
          name_or_tags_name_or_episode_type_name_cont: null
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/casting/casting.tmpl.html'
          },
          'side-bar@home': {
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
          'episodes@home': {
            templateUrl: 'app/casting/episodes/index/index.tmpl.html',
            controller: 'EpisodesIndexController as vm',
            resolve: {
              episodes: ['Episode', '$stateParams', function(Episode, $stateParams) {
                return Episode.query($stateParams);
              }]
            }
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
