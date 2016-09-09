(function() {

  var viewStyle = function() {
    var vm = this;

    var VIEW_STYLE = {
      FULL: 'full',
      LIST: 'list',
      GRID: 'grid'
    };

    var currentStyle = VIEW_STYLE.FULL;

    var getCurrentStyle = function() {
      return currentStyle;
    };

    var setCurrentStyle = function(style) {
      currentStyle = _.find(VIEW_STYLE, function(value, key) {
        return value == style;
      });
    };

    vm.getCurrentStyle = getCurrentStyle;
    vm.setCurrentStyle = setCurrentStyle;

    return vm;
  };

  angular.module('yujihomo')
    .service('viewStyle', viewStyle);
})();