(function() {

  var EpisodeType = function($http) {
    var vm = this;

    var query = function() {
      var req = {
        method: 'GET',
        url: '/api/episode_types'
      };

      return $http(req);
    };

    var get = function(id) {
      var req = {
        method: 'GET',
        url: '/api/episode_types/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.get = get;

    return vm;
  };

  EpisodeType.$inject = ['$http'];

  angular.module('yujihomo')
    .service('EpisodeType', EpisodeType);
})();
