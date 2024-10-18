const $body = $("body");
const $html = $("html");
const $header = $("header");
const $mobileMenu = $(".mobile-menu");
const $hamburger = $(".hamburger")

$hamburger.on("click", function () {
    $("body, html").animate({
        scrollTop: 0,
    });
    if (!$html.hasClass("menu-open")) {
        openMenu();
    } else {
        closeMenu();
    }
});

$mobileMenu.find("a").on("click", function () {
    closeMenu();
})

function openMenu()
{
    $mobileMenu.css("display", "flex").attr('aria-hidden', false);
    $hamburger.attr("aria-expanded", "true");
    setTimeout(() => {
        $html.toggleClass("menu-open");
        $header.toggleClass("menu-open");
        $mobileMenu.css("opacity", "1")
    }, 10)
}

function closeMenu()
{
    $mobileMenu.css("opacity", "0")
    $html.toggleClass("menu-open");
    $header.toggleClass("menu-open");
    $hamburger.attr("aria-expanded", "false");
    setTimeout(() => {
        $mobileMenu.css("display", "none").attr('aria-hidden', true);
    }, 100)
}