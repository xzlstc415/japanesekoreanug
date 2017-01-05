(function() {
  'use strict';

  var TagsController = function(tags, Tag, usSpinnerService, ErrorMessageHandler, toastr) {
    var vm = this;
    vm.tags = tags.data;

    var removeTag = function(tag) {
      usSpinnerService.spin('spinner-1');
      EpisodeType.destroy(tag.id)
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          var index = vm.tags.indexOf(tag);
          vm.tags.splice(index, 1);
          toastr.success(tag.name + ' has been deleted!');
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    vm.removeTag = removeTag;
  };

  TagsController.$inject = ['tags', 'Tag', 'usSpinnerService', 'ErrorMessageHandler', 'toastr'];

  angular.module('yujihomo')
    .controller('TagsController', TagsController);
})();
