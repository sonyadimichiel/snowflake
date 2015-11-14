/**
 * Created by sonyadimichiel on 3/11/2015.
 */

/* chapter2/controller.js */
/* chapter5/controller.js - Blog */

'use strict';

/* Controllers */

var helloWorldControllers = angular.module('helloWorldControllers', []);
var blogControllers = angular.module('blogControllers', []);
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
        console.log('get query list');
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId},
            function(phone) {
                $scope.mainImageUrl = phone.images[0];
                console.log("get phone detail");
            });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);

blogControllers.controller('BlogCtrl', ['$scope',
    function BlogCtrl($scope) {
        $scope.blogArticle = "This is a blog about AngularJS." +
            " We will cover how to build a blog and how to add " +
            "comments to the blog post.";


        $scope.blogList = [{
            "_id": 1,
            "date": 1400623623107,
            "introText": "This is a blog post about AngluarJS. We will cover how to build",
            "blogText": "This is a blog post about AngularJS. We will cover how to build " +
            "a blog and how to add comments to the blog post."
        }, {
            "_id": 2,
            "date": 1400267723107,
            "introText": "In this blog post we will learn how to build applications based on REST",
            "blogText": "In this blog post we will learn how to build applications based on REST" +
            " web services that contain most of the business logic needed for the application"
        }
        ];

}]);

blogControllers.controller('BlogViewCtrl',
    ['$scope', '$routeParams',
    function BlogViewCtrl($scope, $routeParams) {

        var blogId = $routeParams.id;
        var blog1 = {
            "_id": 1,
            "date": 1400623623107,
            "introText": "This is a blog post about AngularJS. " +
            "We will cover how to build",
            "blogText": "This is a blog post about AngularJS. " +
            "We will cover how to build a blog and how to add comments to the blog post.",
            "comments": [{
                "commentText": "Very good post. I love it."
            }, {
                "commentText": "When can we learn services."
            }
            ]
        };
        var blog2 = {
            "_id": 2,
            "date": 1400267723107,
            "introText": "In this blog post we will learn how to build applications based on REST",
            "blogText": "In this blog post we will learn how to build applications based on REST " +
            "web services that contain most of the business logic needed for the application.",
            "comments": [{
                "commentText": "REST is great. I want to know more."
            }, {
                "commentText": "Will we use Node.js for REST services?."
            }]
        };

        if (blogId == '1') {
            $scope.blogEntry = blog1;
        } else if (blogId == '2') {
            $scope.blogEntry = blog2;
        }
}]);

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

helloWorldControllers.controller('CustomerCtrl',
    ['$scope',
    function CustomerCtrl($scope){
        $scope.customerName = "Bob's Burgers";
        $scope.customerNumber = "44522";

        // add method to scope
        $scope.changeCustomer = function() {
            $scope.customerName = $scope.cName;
            $scope.customerNumber = $scope.cNumber;
        };
}]);

helloWorldControllers.controller('AddCustomerCtrl',
    ['$scope', '$location',
    function AddCustomerCtrl($scope, $location) {
        $scope.submit = function() {
            $location.path('/addedCustomer/' + $scope.cName + "/" + $scope.cCity);
        };
}]);

helloWorldControllers.controller('AddedCustomerCtrl',
    ['$scope', '$routeParams',
    function AddedCustomerCtrl($scope, $routeParams) {
        $scope.customerName = $routeParams.customer;
        $scope.customerCity = $routeParams.city;
    }]
)

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

