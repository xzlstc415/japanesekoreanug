(function() {

  var Comment = function($http) {
    var vm = this;

    var query = function(params) {
      var req = {
        method: 'GET',
        url: '/api/comments',
        params: params
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: '/api/comments',
        data: params
      };

      return $http(req);
    };

    var update = function(id, params) {
      var req = {
        method: 'PUT',
        url: '/api/comments/' + id,
        data: params
      };

      return $http(req);
    };

    var destroy = function(id) {
      var req = {
        method: 'DELETE',
        url: '/api/comments/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.save = save;
    vm.update = update;
    vm.destroy = destroy;

    return vm;
  };

  Comment.$inject = ['$http'];

  angular.module('yujihomo')
    .service('Comment', Comment);
})();
