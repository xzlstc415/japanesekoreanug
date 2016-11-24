(function() {
  'use strict';

  var EpisodesIndexController = function(viewStyle, episodes, $stateParams, episodeFilter, Episode, toastr, $state, usSpinnerService) {
    var vm = this;
    vm.episodes = episodes.data;
    vm.filters = $stateParams;
    episodeFilter.setTag($stateParams.tags_name_eq);
    episodeFilter.setType($stateParams.episode_type_name_eq);

    var removeTag = function() {
      episodeFilter.setTag(null);
    };

    var removeType = function() {
      episodeFilter.setType(null);
    };

    var publishEpisode = function(episode) {
      usSpinnerService.spin('spinner-1');
      Episode.update(episode.id, { episode: { publish: true } }).then(function() {
        usSpinnerService.stop('spinner-1');
        $state.reload();
        toastr.success('You have published a new episode');
      }).catch(function(res) {
        usSpinnerService.stop('spinner-1');
        toastr.error.apply(this, res.data.errors);
      })
    };

    var unPublishEpisode = function(episode) {
      usSpinnerService.spin('spinner-1');
      Episode.update(episode.id, { episode: { unpublish: true } }).then(function() {
        usSpinnerService.stop('spinner-1');
        $state.reload();
        toastr.success('You have unpublished an episode');
      }).catch(function(res) {
        usSpinnerService.stop('spinner-1');
        toastr.error.apply(this, res.data.errors);
      })
    };

    vm.removeType = removeType;
    vm.removeTag = removeTag;
    vm.getCurrentStyle = viewStyle.getCurrentStyle;
    vm.publishEpisode = publishEpisode;
    vm.unPublishEpisode = unPublishEpisode;
  };

  EpisodesIndexController.$inject = ['viewStyle', 'episodes', '$stateParams', 'episodeFilter', 'Episode', 'toastr', '$state', 'usSpinnerService'];

  angular.module('yujihomo')
    .controller('EpisodesIndexController', EpisodesIndexController);
})();
