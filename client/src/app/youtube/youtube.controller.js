(function() {
  'use strict';

  var YoutubeController = function($auth, toastr, $state, usSpinnerService, YoutubeVideo) {
    var vm = this;
    vm.connected = false;
    vm.busy = false;

    var authenticate = function(provider) {
      usSpinnerService.spin('spinner-1');
      $auth.authenticate(provider)
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          toastr.success('You have connected to google successfully!');
          vm.connected = true;
        })
        .catch(function() {
          usSpinnerService.stop('spinner-1');
          toastr.error('Sorry we cannot connect to google :(');
          vm.connected = false;
        });
    };

    var importAllVideos = function() {
      usSpinnerService.spin('spinner-1');
      vm.busy = true;
      YoutubeVideo.save().then(function(res) {
        usSpinnerService.stop('spinner-1');
        toastr.success(res.data.message);
        vm.busy = false;
      })
      .catch(function(res) {
        usSpinnerService.stop('spinner-1');
        toastr.error.apply(this, res.data.errors);
        vm.busy = false;
      });
    };

    vm.authenticate = authenticate;
    vm.importAllVideos = importAllVideos;
  };

  YoutubeController.$inject = ['$auth', 'toastr', '$state', 'usSpinnerService', 'YoutubeVideo'];

  angular.module('yujihomo')
    .controller('YoutubeController', YoutubeController);
})();
