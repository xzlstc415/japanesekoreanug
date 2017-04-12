(function() {
  'use strict';

  var MediumIndexController = function($state, media, Medium, usSpinnerService, ErrorMessageHandler, toastr, mediumType) {
    var vm = this;
    vm.media = media.data;
    vm.mediumType = mediumType;

    var addNewMedia = function() {
      usSpinnerService.spin('spinner-1');
      Medium.save(vm.medium, vm.mediumFile)
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          vm.media.push(res.data);
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var removeMedia = function() {

    };

    vm.addNewMedia = addNewMedia;
    vm.removeMedia = removeMedia;
  };

  MediumIndexController.$inject = ['$state', 'media', 'Medium', 'usSpinnerService', 'ErrorMessageHandler', 'toastr', 'mediumType'];

  angular.module('yujihomo')
    .controller('MediumIndexController', MediumIndexController);
})();
