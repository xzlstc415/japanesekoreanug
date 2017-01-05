(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('tags', {
        url:'/tags',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/tags/tags.tmpl.html',
            controller: 'TagsController as vm'
          }
        },
        resolve: {
          tags: ['Tag', function(Tag) {
            return Tag.query();
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
