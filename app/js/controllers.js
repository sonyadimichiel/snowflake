/**
 * Created by sonyadimichiel on 3/11/2015.
 */

/* chapter2/controller.js */

'use strict';

/* Controllers */

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl',
    ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http){
        $scope.message = "Hello World";
}]);

helloWorldControllers.controller('ShowCtrl',
    ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.message = "Show the World";
}]);

var addonsControllers = angular.module('addonsControllers', []);
addonsControllers.controller('AddonsCtrl',
    ['$scope', 'checkCreds', '$location', 'AddonsList', '$http', 'getToken',
    function AddonsCtrl($scope, checkCreds, $location, AddonsList, $http, getToken) {
        if (checkCreds() != true) {
            $location.path('/loginForm');
        }

        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        AddonsList.getList({},
            function success(response) {
                console.log("Success:" + JSON.stringify(response));
                $scope.addonsList = response;
            },
            function error(errorResponse) {
                console.log("Error:" + JSON.stringify(errorResponse));
            }
        );
        $scope.addonsActiveClass = "active";
}]);