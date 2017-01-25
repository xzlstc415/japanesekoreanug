/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('yujihomo')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('API_URL', 'http://139.162.74.33');
})();
