(function() {
  "use strict";
  function MainCtrl(auth) {
    var vm = this;
    vm.logout = logout;
    function logout() {
      auth.logout();
    }
  }

  MainCtrl.$inject = ["auth"];
  angular.module("inspinia").controller("MainCtrl", MainCtrl);
})();
