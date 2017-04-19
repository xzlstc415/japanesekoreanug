(function() {
  'use strict';

  var mediumType = {
    'icon': 'Icon',
    'regular': 'Regular',
    'large': 'Large'
  };

  angular
    .module('yujihomo')
    .constant('mediumType', mediumType)
    // .constant('API_URL', 'http://localhost:3000');
    .constant('API_URL', 'http://139.162.74.33');
})();
