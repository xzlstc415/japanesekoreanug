(function() {

  var SimilarEpisodeGroup = function($http) {
    var vm = this;

    var query = function() {
      var req = {
        method: 'GET',
        url: '/api/similar_episode_groups'
      };

      return $http(req);
    };

    var get = function(id) {
      var req = {
        method: 'GET',
        url: '/api/similar_episode_groups/' + id
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: '/api/similar_episode_groups',
        data: params
      };

      return $http(req);
    };

    var destroy = function(id) {
      var req = {
        method: 'DELETE',
        url: '/api/similar_episode_groups/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.get = get;
    vm.save = save;
    vm.destroy = destroy;

    return vm;
  };

  SimilarEpisodeGroup.$inject = ['$http'];

  angular.module('yujihomo')
    .service('SimilarEpisodeGroup', SimilarEpisodeGroup);
})();
