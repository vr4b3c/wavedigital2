 $(".hamburger-wrapper").on("click", function () {
    $("body, html").animate({
        scrollTop: 0,
    });
    $("body").toggleClass("menu-open");
    if ($("body").hasClass("menu-open")) {
    $(".mobile-menu").css("display", "flex");
    setTimeout(() => {
    $(".mobile-menu").css("opacity", "1")
}, 10)
} else {
    $(".mobile-menu").css("opacity", "0")
    setTimeout(() => {
    $(".mobile-menu").css("display", "none");
}, 150)
}
});
    $(".mobile-menu").find("a").on("click", function () {
    $("body").toggleClass("menu-open");
    setTimeout(() => {
    $(".mobile-menu").css("opacity", "0")
}, 10)
    $(".mobile-menu").css("display", "none");
})