(function() {
  'use strict';

  var CommentController = function(comments, User, ErrorMessageHandler, toastr, episode, Comment, $state) {
    var vm = this;
    vm.currentUser = User.currentUser();
    vm.comments = comments.data;

    var reply = function(comment) {
      if (!comment) {
        toastr.error('空白コメントはできません!');
        return;
      }
      comment.episode_id = episode.data.id;
      Comment.save({comment: comment}).then(function() {
        $state.reload();
        toastr.success('コメントしました!');
      }).catch(function(res) {
        ErrorMessageHandler.displayErrors(res);
      });
    };

    vm.reply = reply;
  };

  CommentController.$inject = ['comments', 'User', 'ErrorMessageHandler', 'toastr', 'episode', 'Comment', '$state'];

  angular.module('yujihomo')
    .controller('CommentController', CommentController);
})();
