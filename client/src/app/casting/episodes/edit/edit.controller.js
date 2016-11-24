(function() {
  'use strict';

  var EpisodesUpdateController = function(Episode, episode, $state, toastr) {
    var vm = this;
    vm.episode = episode.data;

    var updateEpisode = function() {
      Episode.update(vm.episode.id, vm.episode).then(function(res) {
        $state.go('home');
        toastr.success('Episode is updated');
      }).catch(function(res) {
        toastr.error(res.data.error);
      });
    };

    vm.updateEpisode = updateEpisode;
  };

  EpisodesUpdateController.$inject = ['Episode', 'episode', '$state', 'toastr'];

  angular.module('yujihomo')
    .controller('EpisodesUpdateController', EpisodesUpdateController);
})();
