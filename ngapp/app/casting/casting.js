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
            controller: 'sideBarCtrl as sideBar'
          },
          'episodes@home': {
            templateUrl: 'app/casting/episodes/index/index.tmpl.html',
            controller: 'episodesCtrl as episodes'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
