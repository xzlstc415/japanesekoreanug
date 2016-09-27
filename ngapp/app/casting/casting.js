(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        parent: 'yujihomo',
        views: {
          '@': {
            templateUrl: 'app/casting/casting.tmpl.html'
          },
          'side-bar@home': {
            templateUrl: 'app/casting/side-bar/side-bar.tmpl.html',
            controller: 'sideBarCtrl as vm'
          },
          'episodes@home': {
            templateUrl: 'app/casting/episodes/index/index.tmpl.html',
            controller: 'episodesIndexCtrl as vm',
            resolve: {
              episodes: ['Episode', function(Episode) {
                return Episode.query();
              }]
            }
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
