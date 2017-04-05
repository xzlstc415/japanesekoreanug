(function() {

  var Medium = function($http, API_URL, Upload) {
    var vm = this;

    var query = function(params) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/media',
        params: params
      };

      return $http(req);
    };

    var save = function(params, file) {
      return Upload.upload({
        url: API_URL + '/api/media',
        method: 'POST',
        data: {
          medium: {
            medium_type: params.medium_type,
            image: file
          }
        }
      });
    };

    var destroy = function(id) {
      var req = {
        method: 'DELETE',
        url: API_URL + '/api/media/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.save = save;
    vm.destroy = destroy;

    return vm;
  };

  Medium.$inject = ['$http', 'API_URL', 'Upload'];

  angular.module('yujihomo')
    .service('Medium', Medium);
})();
