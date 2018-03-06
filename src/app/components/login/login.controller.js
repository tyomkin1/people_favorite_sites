(function() {
  "use strict";
  function LoginController($state, toastr, auth) {
    var vm = this;
    vm.user = {};
    vm.login = login;

    function login() {
      if (vm.form.username.$error.required) {
        toastr.error("Username field can't be blank", { timeOut: 3000 });
      } else if (vm.form.password.$error.required) {
        toastr.error("Password field can't be blank", { timeOut: 3000 });
      }
      if (vm.form.$invalid) {
        return;
      }

      if (auth.login(vm.user)) {
        $state.go("index.work-list");
      } else {
        toastr.error("Username or Password is not correct", { timeOut: 3000 });
      }
    }
  }

  LoginController.$inject = ["$state", "toastr", "auth"];
  angular.module("inspinia").controller("LoginController", LoginController);
})();
