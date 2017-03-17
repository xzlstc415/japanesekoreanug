(function() {
  'use strict';

  var EpisodeGroupsShowController = function(episodeGroup, episodes, Episode, SimilarEpisodeGroup, usSpinnerService, ErrorMessageHandler, toastr) {
    var vm = this;
    var init = function() {
      vm.episodes = episodes.data;
      vm.episodeGroup = episodeGroup.data;
    };

    var getEpisodeId = function(episodes) {
      var episodeIds = [];
      for (var i=0; i < episodes.length; i++) {
        episodeIds.push(episodes[i].id);
      }
      return episodeIds;
    };

    var addNewEpisodes = function() {
      usSpinnerService.spin('spinner-1');
      vm.episodeGroup.episode_ids = vm.episodeGroup.episode_ids.concat(getEpisodeId(vm.newEpisodes));
      vm.episodes = vm.episodes.concat(vm.newEpisodes);
      updateEpisodeGroup();
    };

    var updateEpisodeGroup = function() {
      usSpinnerService.spin('spinner-1');
      SimilarEpisodeGroup.update(vm.episodeGroup.id, {similar_episode_group: vm.episodeGroup})
        .then(function() {
          usSpinnerService.stop('spinner-1');
          toastr.success('episode has been deleted!');
          vm.newEpisodes = [];
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var removeEpisode = function(episode) {
      var index = vm.episodes.indexOf(episode);
      var id_index = vm.episodeGroup.episode_ids.indexOf(vm.episodes[index].id);
      vm.episodes.splice(index, 1);
      vm.episodeGroup.episode_ids.splice(id_index, 1);
      updateEpisodeGroup();
    };

    var getEpisodes = function(keyword) {
      return Episode.query({name_or_tags_name_or_episode_type_name_cont: keyword});
    };

    init();

    vm.addNewEpisodes = addNewEpisodes;
    vm.removeEpisode = removeEpisode;
    vm.getEpisodes = getEpisodes;
  };

  EpisodeGroupsShowController.$inject = ['episodeGroup', 'episodes', 'Episode', 'SimilarEpisodeGroup', 'usSpinnerService', 'ErrorMessageHandler', 'toastr'];

  angular.module('yujihomo')
    .controller('EpisodeGroupsShowController', EpisodeGroupsShowController);
})();
