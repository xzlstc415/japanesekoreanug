(function() {
  'use strict';

  var EpisodesUpdateController = function(Episode, episode, $state, toastr, ErrorMessageHandler) {
    var vm = this;
    vm.episode = episode.data;

    var updateEpisode = function() {
      Episode.update(vm.episode.id, {episode: vm.episode}).then(function(res) {
        $state.go('home');
        toastr.success('Episode is updated');
      }).catch(function(res) {
        ErrorMessageHandler.displayErrors(res);
      });
    };

    var canAddVideo = function() {
      if (vm.episodes.youtube_videos.length > 0) { return false; }
    };

    vm.updateEpisode = updateEpisode;
    vm.canAddVideo = canAddVideo;
  };

  EpisodesUpdateController.$inject = ['Episode', 'episode', '$state', 'toastr', 'ErrorMessageHandler'];

  angular.module('yujihomo')
    .controller('EpisodesUpdateController', EpisodesUpdateController);
})();
