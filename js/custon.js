$(function() {

    "use strict";

    var window_width = $(window).width();

    /*Preloader*/
    $(window).load(function() {
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 200);
    });

    // Search class for focus
    $('.header-search-input').focus(
        function() {
            $(this).parent('div').addClass('header-search-wrapper-focus');
        }).blur(
        function() {
            $(this).parent('div').removeClass('header-search-wrapper-focus');
        });

    $(".card .close").click(function() {
        $(this).closest('.card').fadeOut('slow');
    });

    $('.sidebar-collapse, .left-sidebar-collapse').sideNav({
        edge: 'left', // Choose the horizontal origin
    });

    $('.chat-collapse').sideNav({
        menuWidth: 300,
        edge: 'right',
    });
    $('.chat-close-collapse').click(function() {
        $('.chat-collapse').sideNav('hide');
    });
    $('.chat-collapsible').collapsible({
        accordion: false
    });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $('ul.tabs').tabs();

});