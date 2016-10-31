(function() {
  'use strict';

  var EpisodesIndexController = function(viewStyle, episodes, $stateParams, episodeFilter) {
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

    vm.removeType = removeType;
    vm.removeTag = removeTag;
    vm.getCurrentStyle = viewStyle.getCurrentStyle;
  };

  EpisodesIndexController.$inject = ['viewStyle', 'episodes', '$stateParams', 'episodeFilter'];

  angular.module('yujihomo')
    .controller('EpisodesIndexController', EpisodesIndexController);
})();
