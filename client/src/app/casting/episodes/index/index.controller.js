(function() {
  'use strict';

  var EpisodesIndexController = function(User, episodes, $stateParams,
                                         Episode, toastr, $state, usSpinnerService,
                                         ErrorMessageHandler, StarredEpisodeUser) {
    var vm = this;
    vm.episodes = episodes.data;
    vm.currentUser = User.currentUser();
    vm.busy = false;
    vm.end = false;

    var publishEpisode = function(episode) {
      usSpinnerService.spin('spinner-1');
      Episode.update(episode.id, { episode: { publish: true } }).then(function() {
        usSpinnerService.stop('spinner-1');
        $state.reload();
        toastr.success('You have published a new episode');
      }).catch(function(res) {
        usSpinnerService.stop('spinner-1');
        ErrorMessageHandler.displayErrors(res);
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
        ErrorMessageHandler.displayErrors(res);
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

    var starEpisode = function(episode) {
      StarredEpisodeUser.save({starred_episode_user: {episode_id: episode.id}})
        .then(function(res) {
          var index = vm.episodes.indexOf(episode);
          vm.episodes[index].starred = true;
        })
        .catch(function(res) {
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var unstarEpisode = function(episode) {
      StarredEpisodeUser.destroy(episode.id)
        .then(function(res) {
          var index = vm.episodes.indexOf(episode);
          vm.episodes[index].starred = false;
        })
        .catch(function(res) {
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var toggleStar = function(episode) {
      if (!episode.starred) {
        starEpisode(episode);
      } else {
        unstarEpisode(episode);
      }
    };

    vm.publishEpisode = publishEpisode;
    vm.unPublishEpisode = unPublishEpisode;
    vm.nextPage = nextPage;
    vm.toggleStar = toggleStar;
  };

  EpisodesIndexController.$inject = [
    'User',
    'episodes',
    '$stateParams',
    'Episode',
    'toastr',
    '$state',
    'usSpinnerService',
    'ErrorMessageHandler',
    'StarredEpisodeUser'
  ];

  angular.module('yujihomo')
    .controller('EpisodesIndexController', EpisodesIndexController);
})();
