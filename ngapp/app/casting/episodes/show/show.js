(function() {
  'use strict';

  var episodesShowCtrl = function() {
    var vm = this;

    vm.showVideo = false;

    var playVideo = function() {
      vm.showVideo = true;
    };

    vm.playVideo = playVideo;
  };

  episodesShowCtrl.$inject = [];

  angular.module('yujihomo')
    .controller('episodesShowCtrl', episodesShowCtrl);
})();
