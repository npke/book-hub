'use strict';

angular.
module('bookHubApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/home', {
            template: '<home></home>'
        }).
        when('/login', {
            template: '<login></login>'
        }).  
        otherwise('/home');
    }
]);
