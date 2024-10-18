const mediaQuery = window.matchMedia('(max-width: 768px)');

$(function () {
	$('footer .accordion-header').on('click', function () {
		if (mediaQuery.matches) {
			const accordionHeader = $(this);
			const accordionBody = $(this).parent().find('.accordion-body');
			//change types to boolean so they can be reverted
			let accordionHeaderExpanded;
			if ($(accordionHeader).attr('aria-expanded') == 'true') {
				accordionHeaderExpanded = true;
			} else {
				accordionHeaderExpanded = false;
			}
			let accordionBodyHidden;
			if ($(accordionBody).attr('aria-hidden') == 'true') {
				accordionBodyHidden = true;
			} else {
				accordionBodyHidden = false;
			}
			$(accordionHeader).toggleClass('open');
			$(accordionBody).stop().slideToggle();
			$(accordionHeader).attr('aria-expanded', !accordionHeaderExpanded);
			$(accordionBody).attr('aria-hidden', !accordionBodyHidden);
		}
	});

	$(window).on('resize', function () {
		if (!mediaQuery.matches) {
			if ($('footer .accordion-body').css('display') === 'none') {
				$('footer .accordion-body').css('display', 'flex');
			}
			$('footer .accordion-header a').off('click', (e) =>
				preventLinkClick(e)
			);
		} else {
			$('footer .accordion-body').attr('aria-hidden', true);
			$('footer .accordion-header').attr('aria-expanded', false);
			if ($('footer .accordion-body').css('display') === 'flex') {
				$('footer .accordion-body').css('display', 'hidden');
			}
			$('footer .accordion-header a')
				.off()
				.on('click', (e) => preventLinkClick(e));
		}
	});

	if (mediaQuery.matches) {
		$('footer .accordion-header a')
			.off()
			.on('click', (e) => preventLinkClick(e));
		$('footer .accordion-body').attr('aria-hidden', true);
		$('footer .accordion-header').attr('aria-expanded', false);
		if ($('footer .accordion-body').css('display') === 'flex') {
			$('footer .accordion-body').css('display', 'hidden');
		}
	}
});

const preventLinkClick = (e) => {
	if ($(e.currentTarget).parent().attr('aria-expanded') == 'false') {
		e.preventDefault();
	}
};
