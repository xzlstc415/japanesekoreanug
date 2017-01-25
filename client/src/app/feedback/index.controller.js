(function() {
  'use strict';

  var FeedbacksIndexController = function(feedbacks) {
    var vm = this;
    vm.feedbacks = feedbacks.data;
  };

  FeedbacksIndexController.$inject = ['feedbacks'];

  angular.module('yujihomo')
    .controller('FeedbacksIndexController', FeedbacksIndexController);
})();
