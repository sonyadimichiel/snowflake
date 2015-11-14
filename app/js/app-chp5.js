/**
 * Created by sonyadimichiel on 3/11/2015.
 */
/* chapter2/app.js */
/* chapter5/app.js - Blog */

'use strict';
/* App Module */

var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',
    'helloWorldControllers'
]);

var blogApp = angular.module('blogApp', [
    'ngRoute',
    'blogControllers'
]);

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
            templateUrl: '../chp6_view/partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
            when('/phones/:phoneId', {
            templateUrl: '../chp6_view/partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        });
    }]);

blogApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
            templateUrl: '../chp5_view/partials/main.html',
            controller: 'BlogCtrl'
        }).when('/blogPost/:id', {
            templateUrl: '../chp5_view/partials/blogPost.html',
            controller: 'BlogViewCtrl'
        });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);

helloWorldApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
            templateUrl: '../chp5_view/partials/main.html',
            controller: 'MainCtrl'
        }).when('/show', {
            templateUrl: 'partials/show.html',
            controller: 'ShowCtrl'
        }).when('/customer', {
            templateUrl: 'partials/customer.html',
            controller: 'CustomerCtrl'
        }).when('/addCustomer', {
            templateUrl: 'partials/newCustomer.html',
            controller: 'AddCustomerCtrl'
        }).when('/addedCustomer/:customer/:city', {
            templateUrl: 'partials/addedCustomer.html',
            controller: 'AddedCustomerCtrl'
    });

        $locationProvider.html5Mode(false).hashPrefix('!');
}]);