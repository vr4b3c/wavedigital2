$('a[href^="#"]').click(function () {
	$('html, body').animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top,
		},
		500
	);
	return false;
});

$(document).on('scroll', (e) => {
	if ($(e.target).scrollTop() >= 1) {
		$('header').addClass('scrolled');
	} else {
		$('header').removeClass('scrolled');
	}
});

$((e) => {
	if ($(window).scrollTop() >= 1) {
		$('header').addClass('scrolled');
	} else {
		$('header').removeClass('scrolled');
	}
});
