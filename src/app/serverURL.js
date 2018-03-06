(function() {
  "use strict";

  function url() {
    var baseUrl = "https://jsonplaceholder.typicode.com/";

    return {
      users: {
        all: baseUrl + "users"
      },
      websites: {
        all: baseUrl + "photos"
      }
    };
  }

  url.$inject = [];
  angular.module("factory.url", []).factory("url", url);
})();
