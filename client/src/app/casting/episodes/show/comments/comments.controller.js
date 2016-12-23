(function() {
  'use strict';

  var CommentController = function(comments, User, ErrorMessageHandler, toastr, episode, Comment, $state) {
    var vm = this;
    vm.currentUser = User.currentUser();
    vm.comments = comments.data;

    var reply = function(comment) {
      if (!comment) {
        toastr.error('message is empty!');
        return;
      }
      comment.episode_id = episode.data.id;
      Comment.save({comment: comment}).then(function(res) {
        $state.reload();
        toastr.success('You have left a new reply!');
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
