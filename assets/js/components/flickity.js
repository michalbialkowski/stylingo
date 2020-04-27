$(window).on('load', function() {
	$('.flickity--slider').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: false,
		autoPlay: false,
		prevNextButtons: true
	});
});