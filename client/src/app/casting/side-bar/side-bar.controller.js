(function() {
  'use strict';

  var SidebarController = function($stateParams, tags, episodeTypes, episodeFilter, MobileSidebarState, $state) {
    var vm = this;
    vm.tags = tags.data;
    vm.episodeTypes = episodeTypes.data;
    vm.filters = $stateParams;
    vm.hiddenMenuIsVisible = false;
    if ($state.current.name == 'home') {
      episodeFilter.setTag($stateParams.tags_name_eq);
      episodeFilter.setType($stateParams.episode_type_name_eq);
    } else {
      episodeFilter.reset();
    }

    var removeTag = function() {
      episodeFilter.setTag(null);
    };

    var removeType = function() {
      episodeFilter.setType(null);
    };

    var toggleTag = function(tagName) {
      var currentTag = angular.copy(episodeFilter.getTag());
      removeTag();
      if (currentTag != tagName) {
        episodeFilter.setTag(tagName);
      }
    };

    var toggleType = function(typeName) {
      var currentType = angular.copy(episodeFilter.getType());
      removeType();
      if (currentType != typeName) {
        episodeFilter.setType(typeName);
      }
    };

    var openMobileSidebar = function() {
      vm.hiddenMenuIsVisible = true;
      MobileSidebarState.open();
    };

    var closeMobileSidebar = function() {
      vm.hiddenMenuIsVisible = false;
      MobileSidebarState.close();
    };

    vm.getTag = episodeFilter.getTag;
    vm.getType = episodeFilter.getType;
    vm.toggleType = toggleType;
    vm.toggleTag = toggleTag;
    vm.removeType = removeType;
    vm.removeTag = removeTag;
    vm.openMobileSidebar = openMobileSidebar;
    vm.closeMobileSidebar = closeMobileSidebar;
  };

  SidebarController.$inject = ['$stateParams', 'tags', 'episodeTypes', 'episodeFilter', 'MobileSidebarState', '$state'];

  angular.module('yujihomo')
    .controller('SidebarController', SidebarController);

})();
