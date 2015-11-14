describe("Hello World Test", function() {
	it("should test the main page", function() {
        browser.get("http://localhost:8888/chp4_view/index.html#!/");
        expect(browser.getTitle()).toEqual("AngularJS Hello World");

        var msg = element(by.binding("message")).getText();
        expect(msg).toEqual("Hello World");

        browser.get("http://localhost:8888/chp4_view/index.html#!/show");
        expect(browser.getTitle()).toEqual("AngularJS Hello World");

        var msg = element(by.binding("message")).getText();
        expect(msg).toEqual("Show the World");

        browser.get("http://localhost:8888/chp4_view/index.html#!/addCustomer");
        element(by.model("cName")).sendKeys("tester");
        element(by.model("cCity")).sendKeys("Atlanta");
        element(by.id("f1")).click();

        browser.get("http://localhost:8888/chp4_view/index.html#!/addedCustomer/tester/Atlanta");

        var msg = element(by.binding("customerName")).getText();
        expect(msg).toEqual("Customer Name: tester");

        var msg = element(by.binding("customerCity")).getText();
        expect(msg).toEqual("Customer City: Atlanta");
    });
});
