(function() {
  'use strict';

  var EpisodesCreateController = function(Episode, $state, toastr) {
    var vm = this;

    var saveEpisode = function() {
      Episode.save(vm.episode).then(function(res) {
        $state.go('home');
        toastr.success('You have created a new episode');
      }).catch(function(res) {
        toastr.error(res.data.error);
      });
    };

    vm.saveEpisode = saveEpisode;
  };

  EpisodesCreateController.$inject = ['Episode', '$state', 'toastr'];

  angular.module('yujihomo')
    .controller('EpisodesCreateController', EpisodesCreateController);
})();
