(function() {
  'use strict';

  var sideBarCtrl = function(viewStyle) {
    var vm = this;

    vm.setCurrentStyle = viewStyle.setCurrentStyle;
    vm.getCurrentStyle = viewStyle.getCurrentStyle;
  };

  sideBarCtrl.$inject = ['viewStyle'];

  angular.module('yujihomo')
    .controller('sideBarCtrl', sideBarCtrl);

})();