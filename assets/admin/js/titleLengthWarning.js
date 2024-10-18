$(document).ready(function () {
    $('input[name*=title]').on('input', function () {
        if ($(this).val().length > 30) {
            $('.title-message').show();
            $(this).css('border', '1px solid #f5803e');
        } else {
            $('.title-message').hide();
            $(this).css('border', '1px solid var(--falcon-input-border-color)');
        }
    });
});
