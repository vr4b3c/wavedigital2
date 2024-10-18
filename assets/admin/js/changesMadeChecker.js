const $inputs = $('.main-inner').find('input');
const $textAreas = $('.main-inner').find('textarea');
var unsavedChanges = false;
const $submitButton = $('.main-inner').find('button[type=submit]');
const $secondarySubmitButton = $('#btnSecondarySave');

$inputs.on('input', function () {
    unsavedChanges = true;
});

$textAreas.on('input', function () {
    unsavedChanges = true;
});

$submitButton.on('click', function () {
    unsavedChanges = false;
});

$secondarySubmitButton.on('click', function () {
    unsavedChanges = false;
})

window.onbeforeunload = function () {
    if (unsavedChanges) {
        return 'Na webu jsou neuložené změny';
    } else {
        return undefined;
    }
};
