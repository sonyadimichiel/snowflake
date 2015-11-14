'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);
var blogServices = angular.module('blogServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    console.log('get services');
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

blogServices.factory('BlogPost', ['$resource',
  function($resource) {
    return $resource(
        "http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blog/:id", {}, {
          get: {method: 'GET', cache: false, isArray: false},
          save: {method: 'POST', cache: false, isArray: false},
          update: {method: 'PUT', cache: false, isArray: false},
          delete: {method: 'DELETE', cache: false, isArray: false}
    });
  }]);

blogServices.factory('BlogList', ['$resource',
  function($resource) {
    return $resource(
        "http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogList", {}, {
          get: {method: 'GET', cache: false, isArray: true}
        });
  }]);
