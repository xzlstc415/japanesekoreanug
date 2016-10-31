(function() {

  var Episode = function($http) {
    var vm = this;

    var query = function(params) {
      var req = {
        method: 'GET',
        url: '/api/episodes',
        params: params
      };

      return $http(req);
    };

    var get = function(id) {
      var req = {
        method: 'GET',
        url: '/api/episodes/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.get = get;

    return vm;
  };

  Episode.$inject = ['$http'];

  angular.module('yujihomo')
    .service('Episode', Episode);
})();
