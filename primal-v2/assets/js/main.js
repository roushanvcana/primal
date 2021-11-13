// JavaScript Document
//(function($) {
//    "use strict";

$(document).ready(function () {
	$("#banner-slider").owlCarousel({
		itemsCustom: [
			[0, 1],
			[500, 1],
			[768, 1],
			[992, 1],
			[1200, 1],
		],
		//autoPlay: 3000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navigation: true,
		pagination: false
	});
});









//})(jQuery);