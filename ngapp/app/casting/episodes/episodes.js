(function() {
  'use strict';

  var episodesCtrl = function(viewStyle) {
    var vm = this;
    
    vm.getCurrentStyle = viewStyle.getCurrentStyle;
  };

  episodesCtrl.$inject = ['viewStyle'];

  angular.module('yujihomo')
    .controller('episodesCtrl', episodesCtrl);
})();