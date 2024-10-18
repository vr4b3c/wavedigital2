const html = $('html');
const darkThemeClass = 'theme--dark';
const lightThemeClass = 'theme--light';
function changePageTheme()
{
    //set checkbox value to the opposite of it
    const themeSwitcher = $('.theme-switcher');
    const checkbox = $(themeSwitcher).find('input');
    const mobileThemeSwitcher = $('.theme-switcher-mobile');
    const mobileCheckbox = $(mobileThemeSwitcher).find('input');

    $(html).toggleClass(darkThemeClass);
    $(html).toggleClass(lightThemeClass);

    if ($(html).hasClass(darkThemeClass)) {
        document.cookie = 'theme=dark;path=/;max-age=' + 3 * 24 * 60 * 60;
    } else {
        document.cookie = 'theme=light;path=/;max-age=' + 3 * 24 * 60 * 60;
    }

    //make sure both theme switchers have same state
    if ($(html).hasClass(darkThemeClass)) {
        $(checkbox).prop('checked', true);
        $(mobileCheckbox).prop('checked', true);
    } else {
        $(checkbox).prop('checked', false);
        $(mobileCheckbox).prop('checked', false);
    }
}

//initial decision
document.addEventListener('DOMContentLoaded', function (event) {
    window.onload = function () {
        const themeSwitcher = $('.theme-switcher');
        const checkbox = $(themeSwitcher).find('input');
        const mobileThemeSwitcher = $('.theme-switcher-mobile');
        const mobileCheckbox = $(mobileThemeSwitcher).find('input');

        if ($(html).hasClass(darkThemeClass)) {
            $(checkbox).attr('checked', true);
            $(mobileCheckbox).attr('checked', true);
        } else {
            $(checkbox).attr('checked', false);
            $(mobileCheckbox).attr('checked', false);
        }

        setTimeout(() => {
            $(themeSwitcher).removeClass('loading');
        }, 400);

        //theme switcher
        $(themeSwitcher).on('change', function () {
            changePageTheme();
        });

        //mobile theme switcher
        $(mobileThemeSwitcher).on('change', function () {
            changePageTheme();
        });
    };
});