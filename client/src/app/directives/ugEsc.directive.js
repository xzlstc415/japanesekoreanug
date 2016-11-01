(function() {
  'use strict';

  var ugEsc = function() {
    var link = function(scope, element, attr) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 27) {
          scope.$apply(function (){
            scope.$eval(attrs.ugEsc);
          });

          event.preventDefault();
        }
      });
    };
    return {
      link: link
    };
  };

  angular.module('yujihomo').directive('ugEsc', ugEsc);
})();
