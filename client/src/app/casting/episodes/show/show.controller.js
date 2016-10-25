(function() {
  'use strict';

  var EpisodesShowController = function(episode) {
    var vm = this;
    vm.episode = episode.data;
    vm.commentsSelected = true;
    vm.showVideo = false;

    var playVideo = function() {
      vm.showVideo = true;
    };

    vm.playVideo = playVideo;
  };

  EpisodesShowController.$inject = ['episode'];

  angular.module('yujihomo')
    .controller('EpisodesShowController', EpisodesShowController);
})();
