$(function () {
    $('.navbar-default .navbar-nav > li > a').click(function () {

        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        $(".navbar-default .navbar-nav > li").addClass('active').siblings().removeClass('active');
    });

});
$(window).on("load",function () {
    $("body").css("overflow","auto");
    $(".overlay h2").delay(3000).fadeOut(2000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        })
    })
});