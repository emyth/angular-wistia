(function appIIFE(){
    'use strict';

    angular.module('angularWistia', ['ngRoute', 'ngResource', 'ui.bootstrap',
        'blueimp.fileupload', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls'])

        .config(function appConfigure($routeProvider) {
            $routeProvider.when('/attachments-sample', {templateUrl: 'features/attachments/sample-page/sample-page.html'});
            /* Add New Routes Above */
            $routeProvider.otherwise({redirectTo: '/attachments-sample'});
        })

        .run(function appInitialize($rootScope) {
            // generated by cg-angular, yeoman generator
            $rootScope.safeApply = function safeApply(fn) {
                var phase = $rootScope.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && (typeof(fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };
        });
})();
