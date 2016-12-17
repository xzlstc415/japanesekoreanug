(function() {

  var secondsToTimeFormat = function() {
      return function(seconds) {
        var second = seconds % 60;
        var minute = Math.floor(seconds / 60);
        if (minute > 0) {
          return minute.toString() + ' minutes ' + second.toString() + ' seconds';
        } else {
          return second.toString() + ' seconds';
        }
      };
  };

  secondsToTimeFormat.$inject = [];

  angular.module('yujihomo')
    .filter('secondsToTimeFormat', secondsToTimeFormat);
})();
