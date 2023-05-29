
var megaMenuWCAG = (function(){

    let tabbingTiming = null;

    $('.overlay-on-over').on("focus", function(){
        if($(window).width() > 831){
            clearTimeout(tabbingTiming);
            resetTab();
        
            tabbingTiming = setTimeout(()=>{
                $(this).addClass("wcag-tab");
                setTimeout(()=>{
                    $(".overlay").fadeIn();
                }, 250);
            }, 1000); // 1 second delay when tabbing to menu btn AND effects touch events
            
            if(!$(this).hasClass("current-menu-item")){
                $(".current-menu-item > p").addClass("menuItemGhosted");
            }else{
                $(this).addClass("currentTabReset"); // Create a class that resests current-menu-item
            }
        } 
       
    });


    // sub-menu-nav-btns
    $('a').on("focus", function(){
        // resetSubcat();
        if($(this).closest(".sub-menu-nav-btn").length > 0){
            $(".sub-menu-nav-btn").removeClass("sub-menu-nav-btn-wcag-active");
            $(this).closest(".sub-menu-nav-btn").addClass("sub-menu-nav-btn-wcag-active");
            // openSubCol(this);
        };
    });

    function resetTab(){
        $(".overlay").fadeOut("fast");  
        $(".overlay-on-over").removeClass("wcag-tab");
        $(".current-menu-item > p").removeClass("menuItemGhosted");
        $(this).removeClass("wcag-tabForceOriginal");
    }

    ////////////////// Sroll Events //////////////////

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
           $('.mega-menu-container').css('position', 'fixed');
        }else{
            $('.mega-menu-container').css('position', 'relative');
        }
    });

    // Throttle function


     ////////////////// Sroll Events //////////////////

})();