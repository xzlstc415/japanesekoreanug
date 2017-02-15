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

    var getTag = function() {
      return filters.tags_name_eq;
    };

    var getType = function() {
      return filters.episode_type_name_eq;
    };

    var setTag = function(tag_name) {
      filters.tags_name_eq = tag_name;
      refreshState();
    };

    var setType = function(type_name) {
      filters.episode_type_name_eq = type_name;
      refreshState();
    };

    vm.getTag = getTag;
    vm.getType = getType;
    vm.setTag = setTag;
    vm.setType = setType;

    return vm;
  };

  episodeFilter.$inject = ['$state'];

  angular.module('yujihomo')
    .service('episodeFilter', episodeFilter);
})();
