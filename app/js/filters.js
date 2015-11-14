'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  console.log("get query");
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
