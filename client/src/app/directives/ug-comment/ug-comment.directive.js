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

  var ugCommentController = function(Comment, $auth, toastr, $state) {
    var vm = this;
    vm.currentUser = $auth.getPayload();
    vm.isReplying = false;

    var openReplyBlock = function() {
      vm.isReplying = true;
    };

    var reply = function(comment) {
      if (!comment) {
        var comment = {};
      }
      comment.parent_comment_id = vm.comment.id;
      comment.episode_id = vm.comment.episode_id;
      Comment.save(comment).then(function(res) {
        $state.reload();
        toastr.success('You have left a new reply!');
      }).catch(function(res) {
        toastr.error.apply(this, res.data.errors);
      });
    };

    vm.openReplyBlock = openReplyBlock;
    vm.reply = reply;
  };

  ugCommentController.$inject = ['Comment', '$auth', 'toastr', '$state'];

  angular.module('yujihomo')
         .directive('ugComment', ugComment)
         .controller('ugCommentController', ugCommentController);
})();
