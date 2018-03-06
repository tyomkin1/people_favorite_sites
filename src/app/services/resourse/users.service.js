/**
 * Created by Alexandr on 23.07.2017.
 */

(function() {
  "use strict";

  function users(http, url) {
    // servise which work with auth and send request on server

    var service = {
      all: all
    };

    return service;

    function all(data, dinamic_url) {
      return http.get(url.users.all, data, dinamic_url).then(function(res) {
        return res;
      });
    }
  }

  users.$inject = ["http", "url"];
  angular.module("model.users", []).factory("users", users);
})();
