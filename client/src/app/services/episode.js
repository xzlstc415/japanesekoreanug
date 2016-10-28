(function() {

  var Episode = function($http) {
    var vm = this;

    var query = function(params) {
      var req = {
        method: 'GET',
        url: '/api/episodes'
      };

      return $http(req);
    };

    var get = function(id) {
      var deferred = $q.defer();

      var episode = _.find(episodes, function(episode) {
        return episode.id == id;
      });

      if (episode) {
        deferred.resolve({data: episode});
      } else {
        deferred.resolve({errors: ["can't find episode"]});
      }

      return deferred.promise;
    };

    vm.query = query;
    vm.get = get;

    return vm;
  };

  Episode.$inject = ['$http'];

  angular.module('yujihomo')
    .service('Episode', Episode);
})();
