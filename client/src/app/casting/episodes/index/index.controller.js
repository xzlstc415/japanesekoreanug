(function() {
  'use strict';

  var EpisodesIndexController = function(viewStyle, episodes, $stateParams, episodeFilter) {
    var vm = this;
    vm.episodes = episodes.data;
    vm.filters = $stateParams;
    episodeFilter.setTag($stateParams.tag);
    episodeFilter.setType($stateParams.type);

    var removeTag = function() {
      episodeFilter.setTag(null);
    };

    var removeType = function() {
      episodeFilter.setType(null);
    };

    var addTag = function(tag) {
      episodeFilter.setTag(tag);
    };

    var addType = function(type) {
      episodeFilter.setType(type);
    };

    vm.addType = addType;
    vm.addTag = addTag;
    vm.removeType = removeType;
    vm.removeTag = removeTag;
    vm.getCurrentStyle = viewStyle.getCurrentStyle;
  };

  EpisodesIndexController.$inject = ['viewStyle', 'episodes', '$stateParams', 'episodeFilter'];

  angular.module('yujihomo')
    .controller('EpisodesIndexController', EpisodesIndexController);
})();
