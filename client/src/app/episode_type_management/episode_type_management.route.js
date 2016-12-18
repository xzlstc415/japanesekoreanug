(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episode_type_management', {
        url:'/episode_type_management',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/episode_type_management/episode_type_management.tmpl.html',
            controller: 'EpisodeTypeManagementController as vm'
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
