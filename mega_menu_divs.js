
var megaMenu = (function(){

    let ovlerayTimeOut = null;
    let ovlerayDelayedTimeOut = null;

    // On hover for main menu btns
    $(".overlay-on-over").mouseenter(function(e){
        if(!$(this).hasClass("current-menu-item")){
            $(".current-menu-item > p").addClass("menuItemGhosted");
        } 
        $(".overlay-on-over").blur().removeClass("wcag-tab");
        clearTimeout(ovlerayDelayedTimeOut);
        ovlerayTimeOut = setTimeout(()=>{
            if($(window).width() > 831){
                $(".overlay").fadeIn();
            }; 
        }, 250);

    // On mouse leave
    }).mouseleave(()=>{
        $(".current-menu-item > p").removeClass("menuItemGhosted");
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


/////////////////////////////////////////////////////////////////
////////////////////////////// Mobile ///////////////////////////
/////////////////////////////////////////////////////////////////

    //on finger up
    $(".menu-btn").on("touchend", function(e){
        if($(this).hasClass("overlay-on-over") && !$(this).hasClass("current-menu-item")){ // Btn with arrow, but not current-menu-item
            if($(this).hasClass("touch-menu-btn-open")){ // If btn is open, close it. Change current-menu-item bkg to blue
                $(this).removeClass("touch-menu-btn-open").addClass("touch-menu-btn-close");
                $(".current-menu-item > p").removeClass("menuItemGhosted-touch");
            }else{// If btn with arrow is close, open it. Change current-menu-item bkg to grey
                closeAllMenus();
                $(this).addClass("touch-menu-btn-open").removeClass("touch-menu-btn-close");
                $(".current-menu-item > p").addClass("menuItemGhosted-touch").removeClass("touch-current-menu-btn-close");
            }
        }else{
            if($(this).hasClass("current-menu-item-touch")){// If current menu btn is open, close it. Change current-menu-item bkg to blue
                $(this).removeClass("current-menu-item-touch")
                $(this).removeClass("touch-menu-btn-open").addClass("touch-current-menu-btn-close");
            }else if($(this).hasClass("no-dropdown")){
                // Figure something for this...
            }else{// If current menu btn is close, open it. Change current-menu-item bkg to grey
                closeAllMenus();
                $(this).addClass("current-menu-item-touch").removeClass("current-menu-item-return");
                $(this).addClass("touch-menu-btn-open").removeClass("touch-current-menu-btn-close");
            }
        }  
    });

    function closeAllMenus(){ // Close AND reset all menus AND use when resizing window
        $(".menu-btn").removeClass("current-menu-item-touch touch-menu-btn-open touch-menu-btn-close touch-current-menu-btn-close current-menu-item-return");
        $(".current-menu-item > p").removeClass("menuItemGhosted-touch");
    }

    //reset mega menu if window is greater than 831px
    $(window).resize(function(){
        if($(window).width() > 831){
            closeAllMenus();
            $(".overlay").hide();
            $('.menu-btn').show().css("display", "flex");
            $('.hamburger-container').removeClass("formX");
            $(".mega-menu-container").removeClass("revealMenu").removeClass("fadeInMenuBtns");
        }
        else{
            $(document).mouseup();
        }
    });
    
    // Click hamburger menu
    $('.hamburger-container').click(function(){
        $(this).toggleClass("formX");
        if($(".menu-btn").is(":visible")){
            closeAllMenus();
            $(".overlay").fadeOut();
            $(".menu-btn").hide();
            $(".mega-menu-container").removeClass("fadeInMenuBtns revealMenu");
        }else{
            $(".overlay").fadeIn();
            $(".menu-btn").show();
            $(".current-menu-item").css("display", "block");
            $(".mega-menu-container").addClass("fadeInMenuBtns revealMenu");
        };   
    }); 

    // Click outside of mega menu container - WGAC
    $(document).mouseup(function(e){
        var container = $(".mega-menu-container");
        if(!container.is(e.target) && container.has(e.target).length === 0 && $(window).width() < 831){
            container.removeClass("revealMenu").removeClass("fadeInMenuBtns");
            $(".overlay, .menu-btn").hide();
            $('.hamburger-container').removeClass("formX"); 
        }else{ // > 831
            if($(window).width() > 831){            
                $(".overlay").fadeOut("fast");  
            }
            $(".overlay-on-over").removeClass("wcag-tab");
            $(".current-menu-item > p").removeClass("menuItemGhosted");
            $(this).removeClass("wcag-tabForceOriginal");
        }
    });

    // Click on main menu btns


})();