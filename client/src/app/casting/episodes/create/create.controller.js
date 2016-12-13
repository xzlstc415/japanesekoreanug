(function() {
  'use strict';

  var EpisodesCreateController = function(Episode, $state, toastr, Tag, YoutubeVideo, ErrorMessageHandler, episodeTypes) {
    var vm = this;
    vm.episodeTypes = episodeTypes.data;
    vm.youtubeVideos = [];
    vm.episode = {};
    vm.episode.tag_ids = [];

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
      if (vm.youtubeVideos.length > 0) { return false; }
    };

    var setYoutubeVideo = function($tag) {
      if ($tag) {
        vm.episode.youtube_video_id = $tag.id;
      } else {
        delete vm.episode.youtube_video_id;
      }
    };

    var addTag = function($tag) {
      vm.episode.tag_ids.push($tag.id);
    };

    var removeTag = function($tag) {
      var index = vm.episode.tag_ids.indexOf($tag);
      vm.episode.tag_ids.splice(index, 1);
    };

    vm.saveEpisode = saveEpisode;
    vm.searchTags = searchTags;
    vm.searchYoutubeVideos = searchYoutubeVideos;
    vm.canAddVideo = canAddVideo;
    vm.setYoutubeVideo = setYoutubeVideo;
    vm.addTag = addTag;
    vm.removeTag = removeTag;
  };

  EpisodesCreateController.$inject = ['Episode', '$state', 'toastr', 'Tag', 'YoutubeVideo', 'ErrorMessageHandler', 'episodeTypes'];

  angular.module('yujihomo')
    .controller('EpisodesCreateController', EpisodesCreateController);
})();
