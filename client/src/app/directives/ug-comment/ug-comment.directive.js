(function() {
  'use strict';

  var ugComment = function(RecursionHelper) {
    return {
      restrict: 'E',
      templateUrl: '/app/directives/ug-comment/ug-comment.tmpl.html',
      scope: {
        comment: '='
      },
      controller: 'ugCommentController as vm',
      bindToController: true,
      compile: function(element) {
        return RecursionHelper.compile(element);
      }
    };
  };

  ugComment.$inject = ['RecursionHelper'];

  var ugCommentController = function(Comment, User, toastr, $state, ErrorMessageHandler) {
    var vm = this;
    vm.currentUser = User.currentUser();
    vm.isReplying = false;

    var openReplyBlock = function() {
      vm.isReplying = true;
    };

    var reply = function(comment) {
      if (!comment || (comment && comment.content.length === 0)) {
        toastr.error('空白コメントはできません!');
        return;
      }
      comment.parent_comment_id = vm.comment.id;
      comment.episode_id = vm.comment.episode_id;
      Comment.save({comment: comment}).then(function(res) {
        $state.reload();
        toastr.success('コメントしました!');
      }).catch(function(res) {
        ErrorMessageHandler.displayErrors(res);
      });
    };

    vm.openReplyBlock = openReplyBlock;
    vm.reply = reply;
  };

  ugCommentController.$inject = ['Comment', 'User', 'toastr', '$state', 'ErrorMessageHandler'];

  angular.module('yujihomo')
         .directive('ugComment', ugComment)
         .controller('ugCommentController', ugCommentController);
})();
