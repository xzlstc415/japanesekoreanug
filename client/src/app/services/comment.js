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

    vm.query = query;

    return vm;
  };

  Comment.$inject = ['$http'];

  angular.module('yujihomo')
    .service('Comment', Comment);
})();
