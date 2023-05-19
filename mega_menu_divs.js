
var megaMenu = (function(){

    let ovlerayTimeOut = null;
    let ovlerayDelayedTimeOut = null;

    // On hover for main menu btns
    $(".overlay-on-over").mouseenter(()=>{
        $(".overlay-on-over").blur().removeClass("tabHoverState-mv tabHoverState");
        clearTimeout(ovlerayDelayedTimeOut);
        ovlerayTimeOut = setTimeout(()=>{
            $(".overlay").fadeIn();
        }, 250);
    }).mouseleave(()=>{
        if($(window).width() > 831){
            ovlerayDelayedTimeOut = setTimeout(()=>{
                $(".overlay").fadeOut("fast");
                clearTimeout(ovlerayTimeOut);
            }, 1000);
        }
    });

    $(".mega-menu-container").mouseleave(()=> {
        if($(window).width() > 831){
            $(".overlay").fadeOut("fast");
            clearTimeout(ovlerayTimeOut);
        }
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

    ////////////////////////////// Mobile ///////////////////////////

    //reset mega menu if window is greater than 831px
    $(window).resize(function(){
        if($(window).width() > 831){
            $(".overlay").hide();
            $('.menu-btn').show().css("display", "flex");
            $('.mobile-menu-container').removeClass("formX");
            $(".mega-menu-container").removeClass("revealMenu").removeClass("showMenuBtns");
        }
        else{
            $(document).mouseup(); 
        }
    });
    
    // Click hamburger menu
    $('.mobile-menu-container').click(function(){
        $(this).toggleClass("formX");
        $(".overlay, .menu-btn").toggle();
        $(".mega-menu-container").toggleClass("revealMenu").toggleClass("showMenuBtns"); 
    }); 

    // Click outside of mega menu container - WGAC
    $(document).mouseup(function(e){
        var container = $(".mega-menu-container");
        if(!container.is(e.target) && container.has(e.target).length === 0 && $(window).width() < 831){
            container.removeClass("revealMenu").removeClass("showMenuBtns");
            $(".overlay, .menu-btn").hide();
            $('.mobile-menu-container').removeClass("formX"); 
        }else{ // > 831
            $(".overlay").fadeOut("fast");  
            clearTimeout(ovlerayTimeOut);
            $(".overlay-on-over").removeClass("tabHoverState-mv tabHoverState");
        }
    });



})();