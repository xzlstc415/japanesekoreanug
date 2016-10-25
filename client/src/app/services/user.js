(function() {

  var User = function($q) {
    var vm = this;

    var users = [
      {id: 2, name: "Stephanie Hekker"},
      {id: 3, name: "Thomas Hopkins"},
      {id: 4, name: "Sourv Kumar"},
      {id: 5, name: "Référencemen à Marseille"},
      {id: 6, name: "James Chevalier"},
      {id: 7, name: "Keil Miller Jr"}
    ];

    var query = function(params) {
      var deferred = $q.defer();

      deferred.resolve({data: users});

      return deferred.promise;
    };

    var get = function(id) {
      var deferred = $q.defer();

      var user = _.find(users, function(user) {
        return user.id == id;
      });

      if (!!user) {
        deferred.resolve({data: user});
      } else {
        deferred.resolve({errors: ["can't find user"]});
      }

      return deferred.promise;
    };

    vm.query = query;
    vm.get = get;

    return vm;
  };

  User.$inject = ['$q'];

  angular.module('yujihomo')
    .service('User', User);
})();
