/**
 * Created by Alexandr on 23.07.2017.
 */

;(function () {

    "use strict";

    function users ($localStorage, $state, http, url, authUser) {

        // servise which work with auth and send request on server

        var service = {
            all: all,

        };

        return service;

        function all (data, dinamic_url) {
            return http.get(url.users.all, data, dinamic_url)
                .then(function (res) {
                    return res;
                });
        };




    };

    users.$inject = ['$localStorage', '$state', 'http', 'url', 'authUser'];
    angular.module('model.users', []).factory('users', users);

})();