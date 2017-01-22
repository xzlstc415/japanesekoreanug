(function() {
  'use strict';

  var EpisodesShowController = function(User, episode, $sce, StarredEpisodeUser, $state) {
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
    
    var getIframeSrc = function() {
      return 'http://platform.twitter.com/widgets/tweet_button.289140617d6d66fbee36bb5f0535b846.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Fjapanesekoreanug.com%2Fepisodes%2F'+ vm.episode.id + '&amp;size=m&amp;text=%40JPKR_UG%20%E3%81%95%E3%82%93%E3%81%AE%%E5%8B%95%E7%94%BB%E3%82%92%E9%AB%98%E3%81%8F%E8%A9%95%E4%BE%A1%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%9A%20{{vm.episode.name}}&amp;type=share&amp;url=http%3A%2F%2Fjapanesekoreanug.com%2Fepisodes%2F'+ vm.episode.id
    };

    vm.playVideo = playVideo;
    vm.toggleStar = toggleStar;
    vm.getIframeSrc = getIframeSrc;
  };

  EpisodesShowController.$inject = ['User', 'episode', '$sce', 'StarredEpisodeUser', '$state'];

  angular.module('yujihomo')
    .controller('EpisodesShowController', EpisodesShowController);
})();
