(function() {
  'use strict';

  var EpisodesShowController = function(User, episode, $sce, StarredEpisodeUser, $state, ErrorMessageHandler) {
    var vm = this;
    vm.episode = episode.data;
    vm.currentUser = User.currentUser();
    if ($state.current.name == 'episodes-similar-ep') {
      vm.similarEpisodesSelected = true;
      vm.commentsSelected = false;
    } else {
      vm.similarEpisodesSelected = false;
      vm.commentsSelected = true;
    }
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
    
    // var getIframeSrc = function() {
    //   return $sce.trustAsResourceUrl(window.encodeURIComponent( 'http://platform.twitter.com/widgets/tweet_button.289140617d6d66fbee36bb5f0535b846.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=ja&amp;original_referer=http://japanesekoreanug.com/episodes/'+ vm.episode.id + '&amp;size=m&amp;text=この動画' + vm.episode.name + '&amp;type=share&amp;url=http://japanesekoreanug.com/episodes/'+ vm.episode.id));
    // };

    vm.playVideo = playVideo;
    vm.toggleStar = toggleStar;
    // vm.getIframeSrc = getIframeSrc;
  };

  EpisodesShowController.$inject = ['User', 'episode', '$sce', 'StarredEpisodeUser', '$state', 'ErrorMessageHandler'];

  angular.module('yujihomo')
    .controller('EpisodesShowController', EpisodesShowController);
})();
