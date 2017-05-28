(function() {

  var tinymceWrapper = function($window) {
    return $window.tinymce;
  };

  tinymceWrapper.$inject = ['$window'];

  angular.module('yujihomo')
    .factory('tinymce', tinymceWrapper);
})();
