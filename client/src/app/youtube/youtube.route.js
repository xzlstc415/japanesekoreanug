(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('youtube', {
        url:'/youtube',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/youtube/youtube.tmpl.html',
            controller: 'YoutubeController as vm'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
