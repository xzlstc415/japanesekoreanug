(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('youtube', {
        url:'/youtube',
        parent: 'yujihomo',
        data: {
          roles: ['admin']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/youtube/youtube.tmpl.html',
            controller: 'YoutubeController as vm'
          }
        },
        resolve: {
          youtubeVideos: ['YoutubeVideo', function(YoutubeVideo) {
            return YoutubeVideo.query();
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
