(function() {
  'use strict';

  var EpisodesShowController = function(episode, $sce) {
    var vm = this;
    vm.episode = episode.data;
    vm.commentsSelected = true;
    vm.showVideo = false;
    if (vm.episode.youtube_video) {
      vm.embedHtml = $sce.trustAsHtml(vm.episode.youtube_video.api_embed_html);
    }

    var playVideo = function() {
      vm.showVideo = true;
    };

    vm.playVideo = playVideo;
  };

  EpisodesShowController.$inject = ['episode', '$sce'];

  angular.module('yujihomo')
    .controller('EpisodesShowController', EpisodesShowController);
})();
