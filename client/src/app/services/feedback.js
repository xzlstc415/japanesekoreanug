(function() {

  var Feedback = function($http, API_URL) {
    var vm = this;

    var query = function() {
      var req = {
        method: 'GET',
        url: API_URL + '/api/feedbacks'
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: API_URL + '/api/feedbacks',
        data: params
      };

      return $http(req);
    };

    vm.query = query;
    vm.save = save;

    return vm;
  };

  Feedback.$inject = ['$http', 'API_URL'];

  angular.module('yujihomo')
    .service('Feedback', Feedback);
})();
