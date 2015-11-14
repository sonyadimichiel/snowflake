'use strict';

/* chapter/controllerSpec.js */

/* Jasmine specs for controllers go here */
describe('Hello World', function() {
	beforeEach(module('helloWorldApp'));

	describe('MainCtrl', function() {
		var scope, ctrl;
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('MainCtrl', {$scope: scope});
		}));
		it('should create initialed message', function() {
			expect(scope.message).toEqual("Hello World");
		});
	});


    describe('ShowCtrl', function() {
        var scope, ctrl;
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('ShowCtrl', {$scope: scope});
        }));
        it('should create initialed message', function() {
            expect(scope.message).toEqual("Show the World");
        });
    });

    describe('CustomerCtrl', function() {
        var scope, ctrl;
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('CustomerCtrl', {$scope: scope});
        }));
        it('should create initialed message', function() {
            expect(scope.customerName).toEqual("Bob's Burgers");
        });
    });
});

/* chapter5/controllerSpec.js */
describe('AngularJS Blog Application', function() {
    beforeEach(module('blogApp'));

    describe('BlogCtrl', function() {
        var scope, ctrl;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('BlogCtrl', {$scope: scope});
        }));


        it('should create show blog entry count', function() {
            console.log("blogList:" + scope.blogList.length);
            expect(scope.blogList.length).toEqual(2);
        });
    });

    describe('BlogViewCtrl', function() {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $routeParams, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('blogPost').respond({_id: '1'});

            $routeParams.id = '1';
            scope = $rootScope.$new();
            ctrl = $controller('BlogViewCtrl', {$scope: scope});
        }));

        it('should show blog entry id', function() {
            expect(scope.blogEntry._id).toEqual(1);
        });
    });
});
