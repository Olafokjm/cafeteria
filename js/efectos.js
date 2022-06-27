$(document).ready(function(){

//Efecto Menu - Navbar
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

//Efecto Header
    if( $(window).width() > 800 ) {
        $('header .textos').css({
            opacity: 0,
            marginTop: '100px'
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '40px'
        }, 1500);
    };

    //Scroll elementos Menu
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillo').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu - 50
        }, 500);
    
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 50
        }, 500);
    
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    
    });

});