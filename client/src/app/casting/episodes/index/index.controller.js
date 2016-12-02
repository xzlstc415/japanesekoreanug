(function() {
  'use strict';

  var EpisodesIndexController = function($auth, viewStyle, episodes, $stateParams, episodeFilter, Episode, toastr, $state, usSpinnerService) {
    var vm = this;
    vm.episodes = episodes.data;
    vm.filters = $stateParams;
    if ($auth.isAuthenticated()) {
      vm.currentUser = $auth.getPayload();
    } else {
      vm.currentUser = null;
    }

    vm.busy = false;
    vm.end = false;
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
      });
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
      });
    };

    var nextPage = function() {
      if (vm.busy) { return; }
      vm.busy = true;
      var params = $stateParams;
      params.page = Math.ceil(vm.episodes.length / 30) + 1;
      Episode.query(params).then(function(res) {
        if (res.data.length < 30) {
          vm.end = true;
        }
        vm.episodes = vm.episodes.concat(res.data);
        vm.busy = false;
      });
    };

    vm.removeType = removeType;
    vm.removeTag = removeTag;
    vm.getCurrentStyle = viewStyle.getCurrentStyle;
    vm.publishEpisode = publishEpisode;
    vm.unPublishEpisode = unPublishEpisode;
    vm.nextPage = nextPage;
  };

  EpisodesIndexController.$inject = ['$auth', 'viewStyle', 'episodes', '$stateParams', 'episodeFilter', 'Episode', 'toastr', '$state', 'usSpinnerService'];

  angular.module('yujihomo')
    .controller('EpisodesIndexController', EpisodesIndexController);
})();
