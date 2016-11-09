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

  var ugCommentController = function($auth) {
    var vm = this;
    vm.currentUser = $auth.getPayload();
  };

  ugCommentController.$inject = ['$auth'];

  angular.module('yujihomo')
         .directive('ugComment', ugComment)
         .controller('ugCommentController', ugCommentController);
})();
