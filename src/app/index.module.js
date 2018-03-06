(function() {
  'use strict';



  angular
    .module('inspinia', [

        //Main
        'app.directives',
        'app.filters',
        'app.request',
        'app.services',


        // Thirty part
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ngAria',
        'ngMessages',
        'ui.router',
        'ui.bootstrap',
        'cgNotify',
        'ngStorage',
        'toastr',
        'ngDialog',
        'ngFileSaver',
        'LocalForageModule',
        'ngFileUpload'
    ]);

})();
