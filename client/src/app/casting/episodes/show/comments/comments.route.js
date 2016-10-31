(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episodes-comments', {
        url:'/',
        parent: 'episodes-detail',
        views: {
          'comments@episodes-detail': {
            templateUrl: 'app/casting/episodes/show/comments/comments.tmpl.html',
            controller: 'CommentController as vm'
          }
        },
        resolve: {
          comments: ['Comment', 'episode', function(Comment, episode) {
            return Comment.query({episode_id: episode.data.id});
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo')
    .config(stateConfig);
})();
