(function() {
  "use strict";

  angular.module("inspinia").config(routerConfig);

  /** @ngInject */
  function routerConfig(
    $stateProvider,
    $urlRouterProvider,
    $localForageProvider
  ) {
    $stateProvider

      .state("login", {
        url: "/login",
        templateUrl: "app/components/login/login.html",
        data: {},
        controller: "LoginController",
        controllerAs: "vm",
        auth: false,
        resolve: {}
      })

      .state("index", {
        abstract: true,
        url: "",
        templateUrl: "app/components/common/content.html",
        controller: "MainCtrl",
        controllerAs: "vm",
        auth: true
      })

      .state("index.work-list", {
        url: "/work-list",
        templateUrl: "app/components/work-list/work-list.html",
        data: {},
        controller: "WorkListController",
        controllerAs: "vm",
        resolve: {
          /* @ngInject */
          getUsers: function(users, $localForage) {
            return $localForage.keys().then(
              function(res) {
                return getAllItems(res);
              },
              function(res) {}
            );

            function getAllItems(keys) {
              console.log(keys);
              var promises = keys.map(function(key) {
                return $localForage.getItem(key).then(
                  function(res) {
                    return res;
                  },
                  function() {
                    req();
                  }
                );
              });
              return Promise.all(promises).then(
                function(results) {
                  if (results && results.length > 0) {
                    console.log(results);
                    return results;
                  } else {
                    return req();
                  }
                },
                function() {
                  return req();
                }
              );
            }

            function req() {
              return users.all().then(function(res) {
                return res;
              });
            }
          }
        },
        auth: true
      });

    $urlRouterProvider.otherwise("/login");

    $localForageProvider.config({
      name: "myApp", // name of the database and prefix for your data, it is "lf" by default
      version: 1.0, // version of the database, you shouldn't have to use this
      storeName: "app.dataBase" // name of the table
    });
  }
})();
