$(() => {
	if ($('#position_section_progressBar').is(':checked')) {
		$('.valueInput').prop('type', 'number');
		$('.valueInput').prop('min', '0');
		initNegativeNumberValidation();
	} else {
		$('.valueInput').prop('type', 'text');
		$('.valueInput').prop('min', null);
		disableNegativeNumberValidation();
	}
});

$('#position_section_progressBar').on('change', () => {
	if ($('#position_section_progressBar').is(':checked')) {
		$('.valueInput').prop('type', 'number');
		$('.valueInput').prop('min', '0');
		initNegativeNumberValidation();
	} else {
		$('.valueInput').prop('type', 'text');
		$('.valueInput').prop('min', null);
		disableNegativeNumberValidation();
	}
});

$('#paragraph-list').on('DOMSubtreeModified', () => {
	if ($('#position_section_progressBar').is(':checked')) {
		$('.valueInput').prop('type', 'number');
		initNegativeNumberValidation();
	} else {
		$('.valueInput').prop('type', 'text');
		disableNegativeNumberValidation();
	}
});

const initNegativeNumberValidation = () => {
	$('.valueInput').on('change', (event) => {
		if (event.currentTarget.value.slice(0, 1) === '-') {
			alert('Hodnota nesmí být záporná');
			event.currentTarget.value = 0;
		}
	});
	$('.valueInput').each((index, element) => {
		if ($(element).val().slice(0, 1) === '-') {
			alert(
				'Ve formuláři byly nalezeny záporné hodnoty a nastaveny na hodnotu: 0'
			);
			$(element).val(0);
		}
	});
};

const disableNegativeNumberValidation = () => {
	$('.valueInput').off('change');
};