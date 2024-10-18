const isDark = window.matchMedia("(prefers-color-scheme:dark)");
const html = $("html");
const checkbox = $(".theme-control-toggle-input");

if (isDark){
    $(html).toggleClass("dark");
    $(checkbox).prop("checked", true);
}