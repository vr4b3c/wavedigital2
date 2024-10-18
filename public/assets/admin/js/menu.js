$(".navbar-toggler-humburger-icon").on("click", function () {
    if (window.matchMedia('(max-width: 1200px)').matches){
        $("#navbarVerticalCollapse").slideToggle();
        $("#navbarVerticalCollapse").toggleClass("show");
    } else{
        $("body").toggleClass("menu-closed");
    }
})