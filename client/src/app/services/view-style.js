(function() {

  var viewStyle = function(_) {
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
      currentStyle = _.find(VIEW_STYLE, function(value) {
        return value == style;
      });
    };

    vm.getCurrentStyle = getCurrentStyle;
    vm.setCurrentStyle = setCurrentStyle;

    return vm;
  };

  viewStyle.$inject = ['_'];

  angular.module('yujihomo')
    .service('viewStyle', viewStyle);
})();
