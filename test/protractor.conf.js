exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['e2e/customerSpec.js', 'e2e/blogSpec.js'],
	multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }, {
        'browserName': 'safari'
    }]
};

