(function() {
  'use strict';

  var EpisodeGroupsIndexController = function($state, episodeGroups, SimilarEpisodeGroup, usSpinnerService, ErrorMessageHandler, toastr) {
    var vm = this;
    vm.episodeGroups = episodeGroups.data;

    var addNewEpisodeGroup = function(episodeGroup) {
      usSpinnerService.spin('spinner-1');
      SimilarEpisodeGroup.save({similar_episode_group: episodeGroup})
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          toastr.success(res.data.name + ' has been added!');
          vm.episodeGroups.push(res.data);
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var removeEpisodeGroup = function(episodeGroup) {
      usSpinnerService.spin('spinner-1');
      SimilarEpisodeGroup.destroy(episodeGroup.id)
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          var index = vm.episodeGroups.indexOf(episodeGroup);
          vm.episodeGroups.splice(index, 1);
          toastr.success(episodeGroup.name + ' has been deleted!');
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var goToDetail = function(episodeGroup) {
      $state.go('episode-groups-detail', {id: episodeGroup.id});
    };

    vm.goToDetail = goToDetail;
    vm.addNewEpisodeGroup = addNewEpisodeGroup;
    vm.removeEpisodeGroup = removeEpisodeGroup;
  };

  EpisodeGroupsIndexController.$inject = ['$state', 'episodeGroups', 'SimilarEpisodeGroup', 'usSpinnerService', 'ErrorMessageHandler', 'toastr'];

  angular.module('yujihomo')
    .controller('EpisodeGroupsIndexController', EpisodeGroupsIndexController);
})();
