(function() {

  var Comment = function($http, API_URL) {
    var vm = this;

    var query = function(params) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/comments',
        params: params
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: API_URL + '/api/comments',
        data: params
      };

      return $http(req);
    };

    var update = function(id, params) {
      var req = {
        method: 'PUT',
        url: API_URL + '/api/comments/' + id,
        data: params
      };

      return $http(req);
    };

    var destroy = function(id) {
      var req = {
        method: 'DELETE',
        url: API_URL + '/api/comments/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.save = save;
    vm.update = update;
    vm.destroy = destroy;

    return vm;
  };

  Comment.$inject = ['$http', 'API_URL'];

  angular.module('yujihomo')
    .service('Comment', Comment);
})();
