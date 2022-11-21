$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) 
        {
            $('.header').addClass('header-fixed');
            $('.header').addClass('transition');
        }
        else{
            $('.header').removeClass('header-fixed')
            $('.header').removeClass('transition')
        }
    });

    $('.menu-bar').click(function(){
        $('.mob-menu').toggleClass('open close');
        $('.menu-bar i').toggleClass('fa-bars fa-times')
    });

    $('.main-menu li a').click(function(){

        $('li').removeClass('active');
        $(this).closest('li').addClass('active')
    });

    $('.mob-menu .main-menu li a').click(function(){
        $('.mob-menu').addClass('close')
        $('.menu-bar i').toggleClass('fa-bars fa-times')
    })

// Scroll none when mob menu appers
    // $('.menu-bar .fa-bars').on('click', function()
    // {
    //      $('body').toggleClass('no-scroll');
    // });

    // $('.menu-bar .fa-times').on('click', function(){
    //      $('body').removeClass('no-scroll');
    // });

    $('.menu-bar .fa-bars').click(function(){
        $('body').toggleClass('no-scroll');
    })

    $('.menu-bar .fa-times').click(function(){
        $('body').removeClass('no-scroll');
    })

    // Wow JS

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
        }
        )
        wow.init();

        
});

