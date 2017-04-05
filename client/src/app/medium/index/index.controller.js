(function() {
  'use strict';

  var MediumIndexController = function($state, media, Medium, usSpinnerService, ErrorMessageHandler, toastr, mediumType) {
    var vm = this;
    vm.media = media.data;
    vm.mediumType = mediumType;

    var addNewMedia = function() {
      Medium.save(vm.medium, vm.mediumFile);
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
