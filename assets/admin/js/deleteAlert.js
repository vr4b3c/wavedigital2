$('.delete-action').on('click', function (e) {
	if (!window.confirm('Opravdu chcete provést tuto akci?')) {
		e.preventDefault();
	}
});
