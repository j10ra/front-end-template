var website = website || {};

//Liquid Helpers
website.helper = (function() {

	'use strict';

	return  {

		isMobile: function(type, value) {
			var $window = $(window).width();

			//Can be 768 or 640
			if($window < 767 ) {
				value = true;
			} else {
				value = false;
			}

			if (type == 'showValue') {
				return $window;
			} else {
				return value;
			}
		},

		debouncer: function(func, timeout) {
			var timeoutID , time = timeout || 200;

			return function () {
				var scope = this,
					args = arguments;
				clearTimeout(timeoutID);
				timeoutID = setTimeout(function () {
					func.apply(scope, Array.prototype.slice.call(args));
				}, time);
			};
		},

		ifExist: function(elem, func) {
			if (elem.length > 0) {
				func.apply(this, Array.prototype.slice.call(arguments));
			}
		}
	};

}());