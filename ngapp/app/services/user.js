(function() {

  var User = function($q) {
    var vm = this;

    var current_user = {
      name: "Yuji Ogasawara",
      email: "jkug@gmail.com",
      receive_email: true
    };

    var getCurrentUser = function() {
      var deferred = $q.defer();

      deferred.resolve({data: current_user});

      return deferred.promise;
    };

    vm.getCurrentUser = getCurrentUser;

    return vm;
  };

  User.$inject = ['$q'];

  angular.module('yujihomo')
    .service('User', User);
})();
