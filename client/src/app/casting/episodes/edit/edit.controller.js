(function() {
  'use strict';

  var EpisodesUpdateController = function(Episode, episode) {
    var vm = this;
    vm.episode = episode.data;

    var updateEpisode = function() {
      Episode.update(vm.episode.id, vm.episode).then(function(res) {
        console.log("success");
      });
    };

    vm.updateEpisode = updateEpisode;
  };

  EpisodesUpdateController.$inject = ['Episode', 'episode'];

  angular.module('yujihomo')
    .controller('EpisodesUpdateController', EpisodesUpdateController);
})();
