(function() {
  "use strict";

  angular.module("inspinia").run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, credentials, authUser) {
    $rootScope.$state = $state;

    $rootScope.$on("$stateChangeStart", function(
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {
      // check for go to state/page if user authorized or not (if he can't credentials for page then event prevented)
      if (!credentials.authorized(toState)) {
        event.preventDefault();
      }
    });

    $rootScope.$on("stateChangeError", function() {
      throw arguments[5];
    });

    var now = new Date().getTime();
    if (authUser.data && (now - authUser.data.date) / 1000 / 60 / 60 / 24 > 7) {
      authUser.setData({});
    }

    if (authUser.data && authUser.data) {
      $state.go("index.work-list");
    } else {
      $state.go("login");
    }

    $log.debug("runBlock end");
  }
})();
