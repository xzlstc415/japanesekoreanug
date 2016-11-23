(function() {
  'use strict';

  var EpisodesCreateController = function(Episode) {
    var vm = this;

    var saveEpisode = function() {
      Episode.save(vm.episode).then(function(res) {
        console.log("success");
      });
    };

    vm.saveEpisode = saveEpisode;
  };

  EpisodesCreateController.$inject = ['Episode'];

  angular.module('yujihomo')
    .controller('EpisodesCreateController', EpisodesCreateController);
})();
