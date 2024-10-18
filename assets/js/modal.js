const modalWrapper = $(".modal-wrapper");
const modalSteps = $(".modal");
const inputs = $(modalWrapper).find("input");
const form = $("#contact_window_form");
const wacForm = $("#contact_wac_form");

$(inputs).on("change", function () {
	if ($(this).hasClass("red")) {
		$(this).removeClass("red");
	}
});

//close modal on clicking outside of it
$(document).on("click", function (e) {
	if (
		($("html").hasClass("modal-open") ||
			$("html").hasClass("wac-modal-open")) &&
		$(e.target).closest(".modal, *[modal-opener], *[wac-sign-in]").length ===
			0
	) {
		closeModal();
	}
});

//open modal on btn with modal-opener attr click
$("*[modal-opener]").on("click", function () {
	openModal();
});

$(".modal-close-btn").on("click", function () {
	closeModal();
});

$("button[button-type=next-step]").on("click", function (e) {
	e.preventDefault();
	nextFormStep(this);
});

$("*[wac-sign-in]").on("click", function () {
	openWacModal();
});

function openWacModal() {
	$("html").toggleClass("wac-modal-open");
	$(".wac-modal-wrapper").fadeTo(200, 1);
}

function closeModal() {
	if ($(modalWrapper).is(":visible")) {
		$(modalWrapper).fadeTo(200, 0);
	}
	if ($(".wac-modal-wrapper").is(":visible")) {
		$(".wac-modal-wrapper").fadeTo(200, 0);
	}

	setTimeout(() => {
		$("html").removeClass("modal-open");
		$("html").removeClass("wac-modal-open");
		resetAllFormSteps();
	}, 300);
}

function openModal() {
	$("html").toggleClass("modal-open");
	$(".modal-wrapper").fadeTo(200, 1);
}

function nextFormStep(element) {
	if (evaluateFormStep(element)) {
		return;
	}
	const formStep = $(element).parent().parent().data("form-step");

	if (formStep !== 3 && $(element).data("wac") !== true) {
		const name = $("input[data-input-type='name']").val();
		form.trigger("submit");
		if (
			formStep === 1 &&
			$('form[name="contact_window_non"]').length < 1 &&
			$('form[name="contact_window_show_job_select"]').length < 1
		) {
			setTimeout(() => {
				$("input[data-input-type='name']").val(name);
			}, 1000);
		}
		$(".fileInputWrapper span").text(
			"Nahrajte svoje CV nebo životopis... (docx, pdf)"
		);
	}

	if (
		formStep === 3 ||
		$('form[name="contact_window_non"]').length > 0 ||
		$('form[name="contact_window_show_job_select"]').length > 0
	) {
		console.log("name is empty");
		$("input[data-input-type='name']").val("");
	}

	if ($(element).data("wac") === true) {
		wacForm.trigger("submit");
	}

	if (
		$(element)
			.parent()
			.parent()
			.find("#contact_window_engineer_howManyYearsExperienceAfterSchool")
			.val() <= 2
	) {
		//skip step 3
		$(element)
			.parent()
			.parent()
			.toggleClass("active")
			.fadeToggle(150, function () {
				$(`.modal[data-form-step=${formStep + 2}]`)
					.toggleClass("active")
					.fadeToggle(150);
			});
		return;
	}

	$(element)
		.parent()
		.parent()
		.toggleClass("active")
		.fadeToggle(150, function () {
			$(`.modal[data-form-step=${formStep + 1}]`)
				.toggleClass("active")
				.fadeToggle(150)
				.css("display", "flex");
		});
}

function resetAllFormSteps() {
	$(modalSteps).each(function () {
		if ($(this).data("form-step") === 1) {
			$(this).addClass("active").css("display", "flex");
		} else {
			$(this).removeClass("active").css("display", "none");
		}
	});
}

function evaluateFormStep(element) {
	const inputs = $(element)
		.parent()
		.parent()
		.find('input[required="required"], select[required="required"]');
	let isError = false;
	inputs.each(function () {
		const value = $(this).val();
		switch ($(this).data("input-type")) {
			case "phone":
				if (!validatePhoneNumber(value)) {
					addError(this);
					isError = true;
				} else {
					$(this).removeClass("red");
				}
				break;
			case "email":
				if (!validateEmail(value)) {
					addError(this);
					isError = true;
				} else {
					$(this).removeClass("red");
				}
				break;
			case "name":
				if (!validateName(value)) {
					addError(this);
					isError = true;
				} else {
					$(this).removeClass("red");
				}
				break;
			case "whatWouldYouLikeToDo":
				if (!validateWhatWouldYouLikeToDo(value)) {
					addError(this);
					isError = true;
				} else {
					$(this).removeClass("red");
				}
				break;
			case "howManyYearsExperienceSchool":
				if (!validateHowManyYearsExperienceSchool(value)) {
					addError(this);
					isError = true;
				} else {
					$(this).removeClass("red");
				}
				break;
			case "howManyYearsExperienceAfterSchool":
				if (!validateHowManyYearsExperienceAfterSchool(value)) {
					addError(this);
					isError = true;
				}
				break;
			case "CV":
				if (!validateFileInput()) {
					addError(this);
					isError = true;
				}
		}
	});
	return isError;
}

function addError(element) {
	$(element).addClass("red").addClass("shake");
	setTimeout(() => {
		$(element).removeClass("shake");
	}, 500);
}

function checkWhiteSpace(input_str) {
	return input_str.trim().length !== 0;
}

function validatePhoneNumber(input_str) {
	const re1 = /^\+\d{10,12}/g;
	const re2 = /^\d{9}/g;
	return (
		(checkWhiteSpace(input_str) && re1.test(input_str)) || re2.test(input_str)
	);
}

function validateEmail(input_str) {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(input_str) && checkWhiteSpace(input_str);
}

function validateName(input_str) {
	return input_str.length > 0 && checkWhiteSpace(input_str);
}

function validateWhatWouldYouLikeToDo(input_str) {
	return input_str.length > 0;
}

function validateHowManyYearsExperienceSchool(input_str) {
	return input_str.length > 0;
}

function validateHowManyYearsExperienceAfterSchool(input_str) {
	return input_str.length > 0;
}

function validateFileInput() {
	return isFormatError;
}

var isFormatError = false;
$('input[type="file"]#cv').on("change", (e) => {
	const allowedTypes = new Set([
		"application/msword",
		"application/pdf",
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	]);

	const [file] = e.currentTarget.files;

	if (!allowedTypes.has(file.type)) {
		$(e.currentTarget)
			.parent()
			.parent()
			.find(".unsupportedFormat")
			.show()
			.css("display", "flex");
		isFormatError = true;
	} else {
		$(e.currentTarget).parent().parent().find(".unsupportedFormat").hide();
		isFormatError = false;
	}

	if (Math.round(e.currentTarget.files[0].size / 1024 / 1024) > 6) {
		$(e.currentTarget)
			.parent()
			.parent()
			.find(".fileTooBig")
			.show()
			.css("display", "flex");
		isSizeError = true;
	} else {
		$(e.currentTarget).parent().parent().find(".fileTooBig").hide();
		isSizeError = false;
	}
	if (isSizeError === false && isFormatError === false) {
		$(e.currentTarget).parent().find("span").text(file.name);
	} else {
		$(e.currentTarget).val(null);
	}
});
