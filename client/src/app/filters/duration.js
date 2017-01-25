(function() {

  var secondsToTimeFormat = function() {
      return function(seconds) {
        var second = seconds % 60;
        var minute = Math.floor(seconds / 60);
        if (minute > 0) {
          return minute.toString() + '分' + second.toString() + '秒';
        } else {
          return second.toString() + '秒';
        }
      };
  };

  secondsToTimeFormat.$inject = [];

  angular.module('yujihomo')
    .filter('secondsToTimeFormat', secondsToTimeFormat);
})();
