/*jslint browser: true*/
/*global $, window,document */


//Slider-Height

$(document).ready(function () {
    "use strict";
    var uppH = $("header").innerHeight(),
        navH = $("nav").innerHeight(),
        winH = $(window).innerHeight(),
        btnScroll = $("#scroll-top");
    
    $(".carousel-inner img").innerHeight(winH - (uppH + navH));
    
    
    // scroll-top
    
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 400) {
            $(btnScroll).fadeIn();
        } else {
            $(btnScroll).fadeOut();
        }
        
    });
    
    btnScroll.on("click", function () {
        $("body,html").animate({scrollTop: 0}, 500);
    });
    

    
    
    //scroll smooth
    
    $("nav ul li a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

      
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
   
                window.location.hash = hash;
            });
        }
    });
    
    
    // featured-work
    
    $(".feat-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        
        if ($(this).data("class") === "all") {
            $(".feat-work .images .shuffle").css("opacity", 1);
        } else {
            $(".feat-work .images .shuffle").css("opacity", 0.5);
            $($(this).data("class")).parent().css("opacity", 1);
        }
        
    });
    
    
});