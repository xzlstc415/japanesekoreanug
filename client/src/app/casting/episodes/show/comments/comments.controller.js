(function() {
  'use strict';

  var CommentController = function(comments, $auth) {
    var vm = this;
    vm.currentUser = $auth.getPayload();

    vm.comments = comments.data;
  };

  CommentController.$inject = ['comments', '$auth'];

  angular.module('yujihomo')
    .controller('CommentController', CommentController);
})();
