(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('feedback', {
        url:'/feedback',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/feedback/feedback.tmpl.html'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
