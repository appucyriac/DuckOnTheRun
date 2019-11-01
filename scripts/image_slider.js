$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		nav: true,
		navText: ["<img src='images/next-arrow.png' id='right-arrow'>", "<img src='images/prev-arrow.png' id='left-arrow'>"],
		autoWidth: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			1024: {
				items: 2
			},
			1224: {
				items: 3
			}
		}
	});
});