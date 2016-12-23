(function() {
  'use strict';

  var EpisodesShowController = function(episode, $sce, StarredEpisodeUser) {
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

    var starEpisode = function() {
      StarredEpisodeUser.save({starred_episode_user: {episode_id: vm.episode.id}})
        .then(function(res) {
          vm.episode.starred = true;
        })
        .catch(function(res) {
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var unstarEpisode = function() {
      StarredEpisodeUser.destroy(vm.episode.id)
        .then(function(res) {
          vm.episode.starred = false;
        })
        .catch(function(res) {
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var toggleStar = function() {
      if (!vm.episode.starred) {
        starEpisode();
      } else {
        unstarEpisode();
      }
    };

    vm.playVideo = playVideo;
    vm.toggleStar = toggleStar;
  };

  EpisodesShowController.$inject = ['episode', '$sce', 'StarredEpisodeUser'];

  angular.module('yujihomo')
    .controller('EpisodesShowController', EpisodesShowController);
})();
