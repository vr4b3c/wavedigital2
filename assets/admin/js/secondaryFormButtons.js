const saveButton = $('#btnSecondarySave');

$(saveButton).on('click', function (e) {
    $('form').trigger('submit');
})