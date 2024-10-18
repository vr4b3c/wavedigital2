var isSizeError;
var isTypeError;
$('input[type="file"]').on('change', function (e) {
	const allowedTypes = new Set(['image/x-png', 'image/jpeg', 'image/png']);
	const [file] = this.files;
	if (!allowedTypes.has(file.type)) {
		$(this).val(null); // clear the input for invalid file
		e.preventDefault();
		$(this).parent().find('.fileIsNotOfValidType').show();
		isTypeError = true;
		return;
	} else {
		$(this).parent().find('.fileIsNotOfValidType').hide();
		isTypeError = false;
	}

	if (Math.round(this.files[0].size / 1024 / 1024) > 6) {
		$(this).val(null);
		$(this).parent().find('.fileIsTooBigMessage').show();
		isSizeError = true;
		return;
	} else {
		$(this).parent().find('.fileIsTooBigMessage').hide();
		isSizeError = false;
	}

	if ($(this).parent().find('img').length < 1 && file) {
		// not found img
		$(this)
			.parent()
			.prepend(
				'<div class="w-100 mb-2"><img src="' +
					URL.createObjectURL(file) +
					'" class="w-25" /></div>'
			);
	} else if (file) {
		$(this).parent().find('img').attr('src', URL.createObjectURL(file));
	}
});

$('form').on('submit', (e) => {
	if (isSizeError || isTypeError) {
		e.preventDefault();
		alert('Ve formuláři se vyskytují chyby.');
	}
});
