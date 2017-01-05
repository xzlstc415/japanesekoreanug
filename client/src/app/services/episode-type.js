(function() {

  var EpisodeType = function($http, API_URL) {
    var vm = this;

    var query = function() {
      var req = {
        method: 'GET',
        url: API_URL + '/api/episode_types'
      };

      return $http(req);
    };

    var get = function(id) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/episode_types/' + id
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: API_URL + '/api/episode_types',
        data: params
      };

      return $http(req);
    };

    var destroy = function(id) {
      var req = {
        method: 'DELETE',
        url: API_URL + '/api/episode_types/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.get = get;
    vm.save = save;
    vm.destroy = destroy;

    return vm;
  };

  EpisodeType.$inject = ['$http', 'API_URL'];

  angular.module('yujihomo')
    .service('EpisodeType', EpisodeType);
})();
