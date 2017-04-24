(function() {

  var Episode = function($http, API_URL, Upload) {
    var vm = this;

    var query = function(params) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/episodes',
        params: params
      };

      return $http(req);
    };

    var get = function(id) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/episodes/' + id
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: API_URL + '/api/episodes',
        data: params
      };

      return Upload.upload(req);
    };

    var update = function(id, params) {
      var req = {
        method: 'PUT',
        url: API_URL + '/api/episodes/' + id,
        data: params
      };

      return Upload.upload(req);
    };

    vm.query = query;
    vm.get = get;
    vm.save = save;
    vm.update = update;

    return vm;
  };

  Episode.$inject = ['$http', 'API_URL', 'Upload'];

  angular.module('yujihomo')
    .service('Episode', Episode);
})();
