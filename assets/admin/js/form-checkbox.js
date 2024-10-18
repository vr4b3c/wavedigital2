const engineerJobCheckbox = $("#contact_window_engineerJob");
const showJobSelectCheckbox = $("#contact_window_showJobSelect");
const positionEngineerJobCheckbox = $("#position_contactFormEngineerJob");
const positionJobSelectCheckbox = $("#position_contactFormShowJobSelect")


$(engineerJobCheckbox).on("change", function () {
    if ($(this).prop("checked") === true) {
        $(showJobSelectCheckbox).prop("checked", false);
    }
});

$(showJobSelectCheckbox).on("change", function () {
    if ($(this).prop("checked") === true) {
        $(engineerJobCheckbox).prop("checked", false);
    }
});


$(positionEngineerJobCheckbox).on("change", function () {
    if ($(this).prop("checked") === true) {
        $(positionJobSelectCheckbox).prop("checked", false);
    }
});

$(positionJobSelectCheckbox).on("change", function () {
    if ($(this).prop("checked") === true) {
        $(positionEngineerJobCheckbox).prop("checked", false);
    }
});