/**
 * Created by Alexandr on 23.07.2017.
 */

(function() {
  "use strict";

  function authUser($localStorage) {
    var login = "user123",
      password = "456789",
     data

    if ($localStorage["app.session"]) {
       data = $localStorage["app.session"];
    }

    var service = {
      data: data,
      setData: setData,
      getData: getData,
      confirmPassword: confirmPassword
    };

    return service;

    function setData(data) {
      if (Object.keys(data).length !== 0) {
        this.data = data;
        $localStorage["app.session"] = data;
      } else {
        delete this.data;
        delete $localStorage["app.session"];
      }
    }

    function getData(item) {
      return this.data[item];
    }

    function confirmPassword(data) {
      var session;
      if (data.username == login && data.password == password) {
        session = {
          date: new Date().getTime(),
          id: 1
        };
        this.setData(session);
        return true;
      } else {
        return false;
      }
    }
  }

  authUser.$inject = ["$localStorage"];
  angular.module("model.authUser", []).factory("authUser", authUser);
})();
