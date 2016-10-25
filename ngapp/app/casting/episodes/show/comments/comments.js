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
            controller: 'commentCtrl as vm'
          }
        },
        resolve: {
          comments: ['Comment', 'episode', function(Comment, episode) {
            return Comment.query({episodeId: episode.data.id});
          }]
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  var commentCtrl = function(comments) {
    var vm = this;

    vm.comments = comments.data;
  };

  commentCtrl.$inject = ['comments'];

  angular.module('yujihomo')
    .config(stateConfig)
    .controller('commentCtrl', commentCtrl);
})();
