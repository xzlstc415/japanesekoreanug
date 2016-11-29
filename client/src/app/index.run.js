(function() {
  'use strict';

  angular
    .module('yujihomo')
    .run(runBlock)
    .run(stateChange);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

  /** @ngInject */
  function stateChange($rootScope, $state,Authorization) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
      $rootScope.toState = toState;
      $rootScope.toStateParams = toStateParams;
      Authorization.authorize(event);
    });
  }

})();
