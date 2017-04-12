(function() {
  'use strict';

  var MediumIndexController = function($state, media, Medium, usSpinnerService, ErrorMessageHandler, toastr, mediumType, _) {
    var vm = this;
    vm.media = media.data;
    vm.mediumType = mediumType;

    var addNewMedia = function() {
      usSpinnerService.spin('spinner-1');
      Medium.save(vm.medium, vm.mediumFile)
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          toastr.success('image has been uploaded successfully');
          vm.media.push(res.data);
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    var removeMedia = function(medium) {
      usSpinnerService.spin('spinner-1');
      Medium.destroy(medium.id)
        .then(function() {
          usSpinnerService.stop('spinner-1');
          toastr.success('image has been deleted successfully');
          _.remove(vm.media, function(m) {
            return m.id == medium.id;
          });
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    vm.addNewMedia = addNewMedia;
    vm.removeMedia = removeMedia;
  };

  MediumIndexController.$inject = ['$state', 'media', 'Medium', 'usSpinnerService', 'ErrorMessageHandler', 'toastr', 'mediumType', '_'];

  angular.module('yujihomo')
    .controller('MediumIndexController', MediumIndexController);
})();
