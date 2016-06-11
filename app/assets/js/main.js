var website = website || {};

website.core = (function () {

    'use strict';

	var page = {
			init: function () {
				console.log('running main.js script...');
			},
            testPublicFunction: function () {
                console.log('I can be a public function');
            }
		};

	return {
		run: function () {
			page.init();
		},
        runPublicFunction : page.testPublicFunction
	};

}());

$(document)
	.foundation()
    .ready(function () {
        website.core.run();
        website.core.runPublicFunction();
    });
	