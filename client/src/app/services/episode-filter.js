(function() {

  var episodeFilter = function($state) {
    var vm = this;

    var filters = {
      tags_name_eq: null,
      episode_type_name_eq: null
    };

    var refreshState = function() {
      $state.go('home', filters);
    };

    var getFilters = function() {
      return filters;
    };

    var setTag = function(tag_name) {
      filters.tags_name_eq = tag_name;
      refreshState();
    };

    var setType = function(type_name) {
      filters.episode_type_name_eq = type_name;
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
