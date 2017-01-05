(function() {

  var StarredEpisodeUser = function($http, API_URL) {
    var vm = this;

    var save = function(params) {
      var req = {
        method: 'POST',
        url: API_URL + '/api/starred_episode_users',
        data: params
      };

      return $http(req);
    };

    var destroy = function(episode_id) {
      var req = {
        method: 'DELETE',
        url: API_URL + '/api/starred_episode_users/' + episode_id
      };

      return $http(req);
    };

    vm.save = save;
    vm.destroy = destroy;

    return vm;
  };

  StarredEpisodeUser.$inject = ['$http', 'API_URL'];

  angular.module('yujihomo')
    .service('StarredEpisodeUser', StarredEpisodeUser);
})();
