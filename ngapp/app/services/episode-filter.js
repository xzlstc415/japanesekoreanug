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
      if (!filters.tag || tag === null) {
        filters.tag = tag;
      }
      refreshState();
    };

    var setType = function(type) {
      if (!filters.type || type === null) {
        filters.type = type;
      }
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
