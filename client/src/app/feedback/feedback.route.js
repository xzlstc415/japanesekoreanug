(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('feedback-create', {
        url:'/feedback',
        parent: 'yujihomo',
        views: {
          '@yujihomo': {
            templateUrl: 'app/feedback/feedback.tmpl.html',
            controller: 'FeedbacksCreateController as vm'
          }
        }
      })
      .state('feedback-index', {
        url:'/feedbacks',
        parent: 'yujihomo',
        data: {
          roles: ['admin']
        },
        views: {
          '@yujihomo': {
            templateUrl: 'app/feedback/feedbacks.tmpl.html',
            controller: 'FeedbacksIndexController as vm'
          }
        },
        resolve: {
          feedbacks: ['Feedback', function(Feedback) {
            return Feedback.query();
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
