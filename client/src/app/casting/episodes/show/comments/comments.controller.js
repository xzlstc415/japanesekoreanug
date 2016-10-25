(function() {
  'use strict';

  var CommentController = function(comments) {
    var vm = this;

    vm.comments = comments.data;
  };

  CommentController.$inject = ['comments'];

  angular.module('yujihomo')
    .controller('CommentController', CommentController);
})();
