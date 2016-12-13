(function() {
  'use strict';

  var EpisodesCreateController = function(Episode, $state, toastr, Tag, YoutubeVideo, ErrorMessageHandler) {
    var vm = this;

    var saveEpisode = function() {
      Episode.save({episode: vm.episode}).then(function(res) {
        $state.go('home');
        toastr.success('You have created a new episode');
      }).catch(function(res) {
        ErrorMessageHandler.displayErrors(res);
      });
    };

    var searchTags = function(key) {
      return Tag.autocomplete({name_cont: key});
    };

    var searchYoutubeVideos = function(key) {
      return YoutubeVideo.autocomplete({api_title_cont: key});
    };

    var canAddVideo = function() {
      if (vm.episodes.youtube_videos.length > 0) { return false; }
    };

    vm.saveEpisode = saveEpisode;
    vm.searchTags = searchTags;
    vm.searchYoutubeVideos = searchYoutubeVideos;
    vm.canAddVideo = canAddVideo;
  };

  EpisodesCreateController.$inject = ['Episode', '$state', 'toastr', 'Tag', 'YoutubeVideo', 'ErrorMessageHandler'];

  angular.module('yujihomo')
    .controller('EpisodesCreateController', EpisodesCreateController);
})();
