(function() {
  'use strict';

  var EpisodesUpdateController = function(User, Episode, episode, $state, toastr, Tag, YoutubeVideo, ErrorMessageHandler, episodeTypes) {
    var vm = this;
    vm.episode = episode.data;
    vm.episodeTypes = episodeTypes.data;
    vm.youtubeVideos = [vm.episode.youtube_video];
    vm.tag_ids = vm.episode.tag_ids;
    vm.tags = vm.episode.tags;
    vm.currentUser = User.currentUser();

    var updateEpisode = function() {
      Episode.update(vm.episode.id, {episode: vm.episode}).then(function(res) {
        $state.go('home');
        toastr.success('Episode is updated');
      }).catch(function(res) {
        ErrorMessageHandler.displayErrors(res);
      });
    };

    var canAddVideo = function() {
      if (vm.youtubeVideos.length > 0) { return false; }
    };

    var searchTags = function(key) {
      return Tag.autocomplete({name_cont: key});
    };

    var searchYoutubeVideos = function(key) {
      return YoutubeVideo.autocomplete({api_title_cont: key});
    };

    var setYoutubeVideo = function($tag) {
      if ($tag) {
        vm.episode.youtube_video_id = $tag.id;
      } else {
        delete vm.episode.youtube_video_id;
      }
    };

    var createTag = function($tag) {
      if ($tag.id) {
        return true;
      } else {
        Tag.save({tag: {name: $tag.text}})
          .then(function(res) {
            return true;
          })
          .catch(function(res) {
            return false;
          });
      }
    };

    var addTag = function($tag) {
      if ($tag.id) {
        vm.episode.tag_ids.push($tag.id);
      } else {
        Tag.save({tag: {name: $tag.text}}).then(function(res) {
          vm.episode.tag_ids.push(res.data.id);
        });
      }
    };

    var removeTag = function($tag) {
      var index = vm.episode.tag_ids.indexOf($tag.id);
      vm.episode.tag_ids.splice(index, 1);
    };

    vm.updateEpisode = updateEpisode;
    vm.canAddVideo = canAddVideo;
    vm.searchTags = searchTags;
    vm.searchYoutubeVideos = searchYoutubeVideos;
    vm.setYoutubeVideo = setYoutubeVideo;
    vm.createTag = createTag;
    vm.addTag = addTag;
    vm.removeTag = removeTag;
  };

  EpisodesUpdateController.$inject = ['User', 'Episode', 'episode', '$state', 'toastr', 'Tag', 'YoutubeVideo', 'ErrorMessageHandler', 'episodeTypes'];

  angular.module('yujihomo')
    .controller('EpisodesUpdateController', EpisodesUpdateController);
})();
