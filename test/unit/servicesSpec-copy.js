/**
 * Created by sonyadimichiel on 9/11/2015.
 */

describe('AngularJS Blog Service Testing', function() {
    describe('test BlogList', function() {
        var $rootScope;
        var blogList;
        var $log;

        beforeEach(module('blogServices'));

        /*
        beforeEach(inject(function(_$log_) {
            $log = _$log_;
        }));

        afterEach(function() {
            console.log($log.debug.logs);
        });
        */

        beforeEach(inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            console.log("DEBUG #1");
            blogList = $injector.get('BlogList');
            console.log("DEBUG #2");
        }));

        it('should test BlogList service', function() {
            /* Checking if blogList is defined */
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
