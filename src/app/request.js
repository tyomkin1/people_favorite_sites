(function() {
  "use strict";

  function http(
    $http,
    $q,
    $sessionStorage,
    $localStorage,
    $state,
    toastr,
    authUser
  ) {
    var request = function(method, url, data, dinamic_url, responseType) {
      var config = {
        method: method,
        url: url,
        headers: { "Content-Type": "application/json" }
      };

      if (typeof authUser.data == "undefined") {
        authUser.data = {};
      }

      if (typeof dinamic_url !== "undefined") {
        if (Array.isArray(dinamic_url)) {
          dinamic_url.map(function(item) {
            config.url += "/" + item;
          });
        } else {
          config.url += "/" + dinamic_url;
        }
      }

      if (authUser.data.access_token) {
        config.headers.Authorization = "Bearer " + authUser.data.access_token;
      }

      if (method === "GET") {
        config.params = data;

        if (data && data.responseType) {
          config.responseType = data.responseType;
        }
      } else {
        config.data = data;
      }

      if (responseType === "blob") {
        config.responseType = responseType;
      }

      var defer = $q.defer();

      $http(config).then(
        function(response) {
          if (response.data.status === "ERROR") {
            defer.reject(response);
          }

          if (
            response.data &&
            response.data.error &&
            (response.data.error.code === 2017 ||
              response.data.error.code === 2001)
          ) {
            authUser.setData({});
            $state.go("login");
          } else {
            defer.resolve(response.data);
          }
        },
        function(response) {
          defer.reject(response.data);
        }
      );
      return defer.promise;
    };

    var requestFile = function(url, data) {
      var config = {
        transformRequest: angular.identity,
        headers: {
          "Content-Type": undefined
        }
      };

      if (typeof authUser.data == "undefined") {
        authUser.data = {};
      }

      if (typeof dinamic_url !== "undefined") {
        if (Array.isArray(dinamic_url)) {
          dinamic_url.map(function(item) {
            config.url += "/" + item;
          });
        } else {
          config.url += "/" + dinamic_url;
        }
      }

      if (authUser.data.access_token) {
        config.headers.Authorization = "Bearer " + authUser.data.access_token;
      }

      var defer = $q.defer();

      $http.post(url, data, config).then(
        function(response) {
          if (response.data.error) {
            defer.reject(response.data.error);
          }
          defer.resolve(response.data);
        },
        function(response) {
          defer.reject(response.data);
        }
      );
      return defer.promise;
    };

    return {
      get: function(url, data, dinamic_url, responseType) {
        return request("GET", url, data, dinamic_url, responseType);
      },
      post: function(url, data, dinamic_url) {
        return request("POST", url, data, dinamic_url);
      },
      delete: function(url, data, dinamic_url) {
        return request("DELETE", url, data, dinamic_url);
      },
      put: function(url, data, dinamic_url) {
        return request("PUT", url, data, dinamic_url);
      },

      file: function(url, data) {
        return requestFile(url, data);
      }
    };
  }

  http.$inject = [
    "$http",
    "$q",
    "$sessionStorage",
    "$localStorage",
    "$state",
    "toastr",
    "authUser"
  ];
  angular.module("factory.request", []).factory("http", http);
})();
