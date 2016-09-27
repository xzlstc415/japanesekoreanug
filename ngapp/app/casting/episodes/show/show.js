(function() {
  'use strict';

  var episodesShowCtrl = function(episode) {
    var vm = this;
    vm.episode = episode.data;

    vm.showVideo = false;

    var playVideo = function() {
      vm.showVideo = true;
    };

    vm.playVideo = playVideo;
  };

  episodesShowCtrl.$inject = ['episode'];

  angular.module('yujihomo')
    .controller('episodesShowCtrl', episodesShowCtrl);
})();
