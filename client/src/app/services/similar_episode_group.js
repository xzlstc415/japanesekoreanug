(function() {

  var SimilarEpisodeGroup = function($http, API_URL) {
    var vm = this;

    var query = function() {
      var req = {
        method: 'GET',
        url: API_URL + '/api/similar_episode_groups'
      };

      return $http(req);
    };

    var get = function(id) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/similar_episode_groups/' + id
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: API_URL + '/api/similar_episode_groups',
        data: params
      };

      return $http(req);
    };

    var update = function(id, params) {
      var req = {
        method: 'PUT',
        url: API_URL + '/api/similar_episode_groups/' + id,
        data: params
      };

      return $http(req);
    };

    var destroy = function(id) {
      var req = {
        method: 'DELETE',
        url: API_URL + '/api/similar_episode_groups/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.get = get;
    vm.save = save;
    vm.update = update;
    vm.destroy = destroy;

    return vm;
  };

  SimilarEpisodeGroup.$inject = ['$http', 'API_URL'];

  angular.module('yujihomo')
    .service('SimilarEpisodeGroup', SimilarEpisodeGroup);
})();
