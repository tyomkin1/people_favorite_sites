/**
 * Created by alex on 13.04.2017.
 */

(function() {
  "use strict";

  function credentials(authUser, $localStorage) {
    var service = {
      authorized: authorized
    };

    return service;

    function authorized(toState) {


      if (
        // User authenticated
        (toState.auth && authUser.data) ||
        // User isn’t authenticated
        (!toState.auth && !authUser.data)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  credentials.$inject = ["authUser", "$localStorage"];
  angular.module("model.credentials", []).factory("credentials", credentials);
})();
