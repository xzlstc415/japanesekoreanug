(function() {
  'use strict';

  var SidebarController = function(viewStyle, tags, episodeTypes, episodeFilter) {
    var vm = this;
    vm.tags = tags.data;
    vm.episodeTypes = episodeTypes.data;

    vm.setCurrentStyle = viewStyle.setCurrentStyle;
    vm.getCurrentStyle = viewStyle.getCurrentStyle;
    vm.setTag = episodeFilter.setTag;
    vm.setType = episodeFilter.setType;
  };

  SidebarController.$inject = ['viewStyle', 'tags', 'episodeTypes', 'episodeFilter'];

  angular.module('yujihomo')
    .controller('SidebarController', SidebarController);

})();
