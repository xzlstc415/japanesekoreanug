(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('media', {
        url:'/media',
        parent: 'yujihomo',
        data: {
          roles: ['admin', 'moderator']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/medium/index/index.tmpl.html',
            controller: 'MediumIndexController as vm',
            resolve: {
              media: ['Medium', function(Medium) {
                return Medium.query();
              }]
            }
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo')
    .config(stateConfig);
})();
