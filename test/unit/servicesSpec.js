/**
 * Created by sonyadimichiel on 9/11/2015.
 */

/* chapter7/servicesSpec.js */

/* Jasmine specs for controllers */
describe('AngularJS Blog Service Testing', function() {
    describe('test BlogList', function() {
        var $rootScope;
        var blogList;

        beforeEach(module('blogServices'));
        beforeEach(inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            blogList = $injector.get('BlogList');
        }));

        it('should test BlogList service', function() {
            expect(blogList).toBeDefined();
        });
    });

    describe('test BlogPost', function() {
        var $rootScope;
        var blogPost;

        beforeEach(module('blogServices'));
        beforeEach(inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            blogPost = $injector.get('BlogPost');
        }));

        it('should test BlogPost service', function() {
            expect(blogPost).toBeDefined();
        });
    });
});