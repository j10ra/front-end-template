//Use strict
//-------------------------------/

var website = website || {};

website.core = (function (page) {

	page = {
		init: function () {
			console.log('running main.js script...');

			$('#slider').on('change.fndtn.slider', function () {
				$('#slider').attr('data-slider');
			});
		}
	};

	return {
		run: function () {
			page.init();
		}
	};

}());

$(document)
    .foundation()
    .ready(function () {
        website.core.run();
    });
	