
var megaMenu = (function(){

    let ovlerayTimeOut = null;

    // On hover for main menu btns
    $(".overlay-on-over").mouseenter(function(){
        ovlerayTimeOut = setTimeout(function(){
            $(".overlay").fadeIn();
        }, 250);
    }).mouseleave(function() {
        $(".overlay").fadeOut("fast");
        clearTimeout(ovlerayTimeOut);
    });
    // /On hover for main menu btns


    $('.cat-1-btn').mouseover(function(){
        resetSubcat();
        $(this).addClass("sub-menu-nav-btn-active");
        $('.sub-column-1').show();
        $(".photoBackDrop").css('background-position', '0 -205px');
    })

    $('.cat-2-btn').mouseover(function(){
        resetSubcat();
        $(this).addClass("sub-menu-nav-btn-active");
        $('.sub-column-2').show();
        $(".photoBackDrop").css('background-position', '0 -410px');

    })

    $('.cat-3-btn').mouseover(function(){
        resetSubcat();
        $(this).addClass("sub-menu-nav-btn-active");
        $('.sub-column-3').show();
        $(".photoBackDrop").css('background-position', '0 -615px')
    })


    $('.cat-4-btn').mouseover(function(){
        resetSubcat();
        $(this).addClass("sub-menu-nav-btn-active");
        $('.sub-column-4').show();
        $(".photoBackDrop").css('background-position', '0 -820px')
    })

    function resetSubcat(){
        $('.sub-column-1, .sub-column-2, .sub-column-3, .sub-column-4').hide();
        $('.cat-1-btn, .cat-2-btn, .cat-3-btn, .cat-4-btn').removeClass("sub-menu-nav-btn-active");
    }

    ////// Mobile /////////
    $('.mobile-menu-container').click(function(){
        $(this).toggleClass("formX");
        $(".overlay, .menu-btn").toggle();
    }); 


})();