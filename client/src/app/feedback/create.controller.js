(function() {
  'use strict';

  var FeedbacksCreateController = function($state, User, Feedback, usSpinnerService, ErrorMessageHandler, toastr) {
    var vm = this;
    vm.currentUser = User.currentUser();
    var initializeFeedback = function() {
      vm.feedback = {};
      if (vm.currentUser) {
        vm.feedback.name = vm.currentUser.name;
        vm.feedback.email = vm.currentUser.email;
      }
    };
    initializeFeedback();

    if (vm.currentUser) {
      vm.feedback.name = vm.currentUser.name;
      vm.feedback.email = vm.currentUser.email;
    }

    var saveFeedback = function() {
      usSpinnerService.spin('spinner-1');
      Feedback.save({feedback: vm.feedback})
        .then(function() {
          usSpinnerService.stop('spinner-1');
          toastr.success('フィードバックを送信しました');
          initializeFeedback();
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };



    vm.saveFeedback = saveFeedback;
  };

  FeedbacksCreateController.$inject = ['$state', 'User', 'Feedback', 'usSpinnerService', 'ErrorMessageHandler', 'toastr'];

  angular.module('yujihomo')
    .controller('FeedbacksCreateController', FeedbacksCreateController);
})();
