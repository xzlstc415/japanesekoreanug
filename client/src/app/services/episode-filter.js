(function() {

  var episodeFilter = function($state) {
    var vm = this;

    var filters = {
      tag: null,
      type: null
    };

    var refreshState = function() {
      $state.go('home', filters);
    };

    var getFilters = function() {
      return filters;
    };

    var setTag = function(tag) {
      filters.tag = tag;
      refreshState();
    };

    var setType = function(type) {
      filters.type = type;
      refreshState();
    };

    vm.getFilters = getFilters;
    vm.setTag = setTag;
    vm.setType = setType;

    return vm;
  };

  episodeFilter.$inject = ['$state'];

  angular.module('yujihomo')
    .service('episodeFilter', episodeFilter);
})();
