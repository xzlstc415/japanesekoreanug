(function() {
  'use strict';

  var episodesIndexCtrl = function(viewStyle) {
    var vm = this;

    vm.getCurrentStyle = viewStyle.getCurrentStyle;
  };

  episodesIndexCtrl.$inject = ['viewStyle'];

  angular.module('yujihomo')
    .controller('episodesIndexCtrl', episodesIndexCtrl);
})();
