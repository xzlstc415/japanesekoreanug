(function() {
  'use strict';

  var SimilarEpisodesController = function(similarEpisodes) {
    var vm = this;
    vm.similarEpisodes = similarEpisodes.data;
  };

  SimilarEpisodesController.$inject = ['similarEpisodes'];

  angular.module('yujihomo')
    .controller('SimilarEpisodesController', SimilarEpisodesController);
})();
