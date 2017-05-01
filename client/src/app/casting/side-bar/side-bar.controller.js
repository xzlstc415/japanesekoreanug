(function() {
  'use strict';

  var SidebarController = function($stateParams, tags, episodeTypes, episodeFilter, MobileSidebarState, $state, Episode, ErrorMessageHandler) {
    var vm = this;
    vm.tags = tags.data;
    vm.episodeTypes = episodeTypes.data;
    vm.filters = $stateParams;
    Episode.queryLatestEpisodes().then(function(res) {
      vm.latestEpisodes = res.data;
    }).catch(function(res) {
      ErrorMessageHandler.displayErrors(res);
    })
    Episode.queryPopularEpisodes().then(function(res) {
      vm.popularEpisodes = res.data;
    }).catch(function(res) {
      ErrorMessageHandler.displayErrors(res);
    })

    if ($state.current.name == 'home') {
      episodeFilter.setTag($stateParams.tags_name_eq);
      episodeFilter.setType($stateParams.episode_type_name_eq);
    } else {
      episodeFilter.reset();
    }
  };

  SidebarController.$inject = ['$stateParams', 'tags', 'episodeTypes', 'episodeFilter', 'MobileSidebarState', '$state', 'Episode', 'ErrorMessageHandler'];

  angular.module('yujihomo')
    .controller('SidebarController', SidebarController);

})();
