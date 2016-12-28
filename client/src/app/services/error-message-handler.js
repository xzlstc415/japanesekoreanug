(function() {

  var ErrorMessageHandler = function(toastr) {
    var vm = this;

    var displayErrors = function(res) {
      if (res.data.errors) {
        res.data.errors.forEach(function(error) {
          toastr.error(error);
        });
      } else {
        toastr.error(res.data.error);
      }
    };

    vm.displayErrors = displayErrors;
    return vm;
  };

  ErrorMessageHandler.$inject = ['toastr'];

  angular.module('yujihomo')
    .service('ErrorMessageHandler', ErrorMessageHandler);
})();
