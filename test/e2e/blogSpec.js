/**
 * Created by sonyadimichiel on 6/11/2015.
 */

describe("Blog Application Test", function() {
    it('should test the main blog page', function () {
        browser.get("http://localhost:8888/chp5_view/");
        expect(browser.getTitle()).toEqual("AngularJS Blog Application");

        var blogList = element.all(by.repeater('blogPost in blogList'));

        expect(blogList.count()).toEqual(2);
        browser.get("http://localhost:8888/chp5_view/#!/blogPost/1");
        expect(browser.getTitle()).toEqual("AngularJS Blog Application");

        var commentList = element.all(
            by.repeater('comment in blogEntry.comments')
        );
        expect(commentList.count()).toEqual(2);
    });
});