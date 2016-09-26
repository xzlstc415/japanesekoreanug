(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episodes-detail', {
        url:'/episodes/:id',
        parent: 'yujihomo',
        views: {
          '@': {
            templateUrl: 'app/casting/episodes/show/show.tmpl.html',
            controller: 'episodesShowCtrl as episodesShow'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
