/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    $(window).resize(function () {
        if ($(window).width() <= 900) {
            $(".menu-s").hide();
        }
    });
    
    $("#btm").click(function () {
        $(".menu-s").slideToggle(200);
    });
    
/*
----------------------------------
    ANCHOR POINT ANIMATION
----------------------------------
*/
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    $(".feature").waypoint(function (direction) {
        $(".feature#img").addClass("animated bounce");
    });
    
/*
----------------------------------
    FEATURE
----------------------------------
*/
    $(".feature").waypoint(function (direction) {
        $("#feat--1").addClass("animated fadeInLeft");
    }, {
        offset: '40%'
        
    });
    $(".feature").waypoint(function (direction) {
        $("#feat--2").addClass("animated fadeInUp");
    }, {
        offset: '40%'
    });
    
    $(".feature").waypoint(function (direction) {
        $("#feat--3").addClass("animated fadeInRight");
    }, {
        offset: '40%'
    });
    
    /*
----------------------------------
    WEBSITES
----------------------------------
*/
    $("#web--1").waypoint(function (direction) {
        $("#web--1").addClass("animated fadeIn");
    }, {
        offset: '70%'
        
    });
    $("#web--2").waypoint(function (direction) {
        $("#web--2").addClass("animated fadeIn");
    }, {
        offset: '70%'
    });
    
    $("#web--3").waypoint(function (direction) {
        $("#web--3").addClass("animated fadeIn");
    }, {
        offset: '70%'
    });
    
    $("#web--4").waypoint(function (direction) {
        $("#web--4").addClass("animated fadeIn");
    }, {
        offset: '70%'
        
    });
    $("#web--5").waypoint(function (direction) {
        $("#web--5").addClass("animated fadeIn");
    }, {
        offset: '70%'
    });
    
    $("#web--6").waypoint(function (direction) {
        $("#web--6").addClass("animated fadeIn");
    }, {
        offset: '70%'
    });
    
    $("#web--7").waypoint(function (direction) {
        $("#web--7").addClass("animated fadeIn");
    }, {
        offset: '70%'
    });
    
/*
----------------------------------
    GRAPHICS
----------------------------------
*/
    $("#graph--1").waypoint(function (direction) {
        $("#graph--1").addClass("animated fadeInUp");
    }, {
        offset: '70%'
        
    });
    $("#graph--2").waypoint(function (direction) {
        $("#graph--2").addClass("animated fadeInUp");
    }, {
        offset: '70%'
    });
    
    $("#graph--3").waypoint(function (direction) {
        $("#graph--3").addClass("animated fadeInUp");
    }, {
        offset: '80%'
        
    });
    
    $("#graph--4").waypoint(function (direction) {
        $("#graph--4").addClass("animated fadeInUp");
    }, {
        offset: '80%'
    });
    
    $("#graph--5").waypoint(function (direction) {
        $("#graph--5").addClass("animated fadeInUp");
    }, {
        offset: '80%'
    });
    
    
/*
----------------------------------
    GRAPHICS
----------------------------------
*/
    $(".ani--1").waypoint(function (direction) {
        $(".ani--1").addClass("animated bounceIn");
    }, {
        offset: '60%'
        
    });
    $(".ani--2").waypoint(function (direction) {
        $(".ani--2").addClass("animated bounceIn");
    }, {
        offset: '60%'
    });
    
    $(".ani--3").waypoint(function (direction) {
        $(".ani--3").addClass("animated bounceIn");
    }, {
        offset: '60%'
        
    });
    
    
/*
----------------------------------
    CONTACT FORM
----------------------------------
*/
    $("#cont--1").waypoint(function (direction) {
        $("#cont--1").addClass("animated fadeInRight");
    }, {
        offset: '70%'
        
    });
    $("#cont--2").waypoint(function (direction) {
        $("#cont--2").addClass("animated fadeInLeft");
    }, {
        offset: '70%'
    });
    

});