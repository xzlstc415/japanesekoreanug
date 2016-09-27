(function() {
  'use strict';

  var episodesIndexCtrl = function(viewStyle, episodes) {
    var vm = this;
    vm.episodes = episodes.data;

    vm.getCurrentStyle = viewStyle.getCurrentStyle;
  };

  episodesIndexCtrl.$inject = ['viewStyle', 'episodes'];

  angular.module('yujihomo')
    .controller('episodesIndexCtrl', episodesIndexCtrl);
})();
