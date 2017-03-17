(function() {
  'use strict';

  var EpisodeTypeManagementController = function(episodeTypes, EpisodeType, usSpinnerService, ErrorMessageHandler, toastr) {
    var vm = this;
    vm.episodeTypes = episodeTypes.data;

    var addNewEpisodeType = function(episodeType) {
      usSpinnerService.spin('spinner-1');
      EpisodeType.save({episode_type: episodeType})
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          toastr.success(res.data.name + ' has been added!');
          vm.episodeTypes.push(res.data);
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var removeEpisodeType = function(episodeType) {
      usSpinnerService.spin('spinner-1');
      EpisodeType.destroy(episodeType.id)
        .then(function() {
          usSpinnerService.stop('spinner-1');
          var index = vm.episodeTypes.indexOf(episodeType);
          vm.episodeTypes.splice(index, 1);
          toastr.success(episodeType.name + ' has been deleted!');
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    vm.addNewEpisodeType = addNewEpisodeType;
    vm.removeEpisodeType = removeEpisodeType;
  };

  EpisodeTypeManagementController.$inject = ['episodeTypes', 'EpisodeType', 'usSpinnerService', 'ErrorMessageHandler', 'toastr'];

  angular.module('yujihomo')
    .controller('EpisodeTypeManagementController', EpisodeTypeManagementController);
})();
