(function() {
  'use strict';

  var sideBarCtrl = function(viewStyle, tags, episodeTypes) {
    var vm = this;
    vm.tags = tags.data;
    vm.episodeTypes = episodeTypes.data;

    vm.setCurrentStyle = viewStyle.setCurrentStyle;
    vm.getCurrentStyle = viewStyle.getCurrentStyle;
  };

  sideBarCtrl.$inject = ['viewStyle', 'tags', 'episodeTypes'];

  angular.module('yujihomo')
    .controller('sideBarCtrl', sideBarCtrl);

})();