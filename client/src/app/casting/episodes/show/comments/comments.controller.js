(function() {
  'use strict';

  var CommentController = function(comments, $auth) {
    var vm = this;
    if ($auth.isAuthenticated()) {
      vm.currentUser = $auth.getPayload();
    } else {
      vm.currentUser = null;
    }

    vm.comments = comments.data;
  };

  CommentController.$inject = ['comments', '$auth'];

  angular.module('yujihomo')
    .controller('CommentController', CommentController);
})();
