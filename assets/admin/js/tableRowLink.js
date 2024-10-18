$('tr[data-href] td:not(.actions)').on('click', (e) => {
	window.location.href = $(e.currentTarget).parent().data('href');
});
