/**
 * Created by alex on 29.03.2017.
 */

(function() {
  "use strict";

  function auth($localStorage, $sessionStorage, http, url, authUser, $state) {
    // servise which work with auth and send request on server

    var service = {
      login: login,
      logout: logout
    };

    return service;

    function login(data) {
      return authUser.confirmPassword(data);
    }

    function logout() {
      authUser.setData({});
      $state.go("login");
    }
  }

  auth.$inject = [
    "$localStorage",
    "$sessionStorage",
    "http",
    "url",
    "authUser",
    "$state"
  ];
  angular.module("model.auth", []).factory("auth", auth);
})();
