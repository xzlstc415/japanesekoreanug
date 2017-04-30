(function() {
  'use strict';

  var SidebarController = function($stateParams, tags, episodeTypes, episodeFilter, MobileSidebarState, $state, Episode) {
    var vm = this;
    vm.tags = tags.data;
    vm.episodeTypes = episodeTypes.data;
    vm.filters = $stateParams;
    vm.hiddenMenuIsVisible = false;
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

    var openMobileSidebar = function() {
      vm.hiddenMenuIsVisible = true;
      MobileSidebarState.open();
    };

    var closeMobileSidebar = function() {
      vm.hiddenMenuIsVisible = false;
      MobileSidebarState.close();
    };

    vm.openMobileSidebar = openMobileSidebar;
    vm.closeMobileSidebar = closeMobileSidebar;
  };

  SidebarController.$inject = ['$stateParams', 'tags', 'episodeTypes', 'episodeFilter', 'MobileSidebarState', '$state', 'Episode'];

  angular.module('yujihomo')
    .controller('SidebarController', SidebarController);

})();
