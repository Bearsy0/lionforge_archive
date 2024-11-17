/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});
	
	// $(window).scroll(function (){
	// 	var scroll = $(window).scrollTop();

	// 	if (scroll >=20) {
	// 		$nav.removeClass('hiddenNav');

	// 	}
	// 	else {
	// 		$nav.addClass('hiddenNav');
	// 	}
	// });

})(jQuery);