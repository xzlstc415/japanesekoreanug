(function() {
  'use strict';

  var YoutubeController = function($auth, toastr, $state, usSpinnerService, YoutubeVideo, ErrorMessageHandler, youtubeVideos, youtubeAccountStatus) {
    var vm = this;
    vm.connected = youtubeAccountStatus.data.connected;
    vm.busy = false;
    vm.youtubeVideos = youtubeVideos.data;

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
        ErrorMessageHandler.displayErrors(res);
        vm.busy = false;
      });
    };

    var refreshVideo = function(youtubeVideo) {
      usSpinnerService.spin('spinner-1');
      YoutubeVideo.update(youtubeVideo.id)
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          var index = vm.youtubeVideos.indexOf(youtubeVideo);
          vm.youtubeVideos[index] = res.data;
          toastr.success('video is updated');
        })
        .catch(function() {
          usSpinnerService.stop('spinner-1');
          toastr.error('something went wrong!');
        });
    };

    vm.authenticate = authenticate;
    vm.importAllVideos = importAllVideos;
    vm.refreshVideo = refreshVideo;
  };

  YoutubeController.$inject = [
    '$auth',
    'toastr',
    '$state',
    'usSpinnerService',
    'YoutubeVideo',
    'ErrorMessageHandler',
    'youtubeVideos',
    'youtubeAccountStatus'
  ];

  angular.module('yujihomo')
    .controller('YoutubeController', YoutubeController);
})();
