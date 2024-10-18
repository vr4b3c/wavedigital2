$(document).ready(function () {
    $('form').on('submit', function (e) {
        if ($('#user_password').val() && $('#user_password').val().length < 8) {
            e.preventDefault();
            alert('Heslo musí být delší než 8 znaků');
        }
    });
});
