$(document).ready(function () {
    if (window.location.href.indexOf('nahled') > -1) {
        const images = $('img');
        images.each(function () {
            const src = localStorage.getItem($(this).data('identifier'));
            $(this).attr('src', src);
        });
    }
});
