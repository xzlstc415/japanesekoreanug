(function() {
  'use strict';

  var EpisodesCreateController = function(Episode, $state, toastr, Tag, YoutubeVideo) {
    var vm = this;

    var saveEpisode = function() {
      Episode.save(vm.episode).then(function(res) {
        $state.go('home');
        toastr.success('You have created a new episode');
      }).catch(function(res) {
        toastr.error(res.data.error);
      });
    };

    var searchTags = function(key) {
      return Tag.autocomplete({name_cont: key});
    };

    var searchYoutubeVideos = function(key) {
      return YoutubeVideo.autocomplete({api_title_cont: key});
    };

    vm.saveEpisode = saveEpisode;
    vm.searchTags = searchTags;
    vm.searchYoutubeVideos = searchYoutubeVideos;
  };

  EpisodesCreateController.$inject = ['Episode', '$state', 'toastr', 'Tag', 'YoutubeVideo'];

  angular.module('yujihomo')
    .controller('EpisodesCreateController', EpisodesCreateController);
})();
