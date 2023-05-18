
var megaMenuWCAG = (function(){

    let tabbingTiming = null;

    $('.overlay-on-over').on("focus", function(){ // Use different selector for WCAG
        clearTimeout(tabbingTiming);
        resetTab();
        if($(this).hasClass("wcagTab-mv")){
            tabbingTiming = setTimeout(()=>{
                $(this).addClass("tabHoverState-mv");
                setTimeout(()=>{
                    $(".overlay").fadeIn();
                }, 250);
            }, 1000); // 1 second delay when tabbing to menu btn
        }else{
            tabbingTiming = setTimeout(()=>{
                $(this).addClass("tabHoverState");
                setTimeout(()=>{
                    $(".overlay").fadeIn();
                }, 250);
            }, 1000); // 1 second delay when tabbing to menu btn
        }
        // tabThruDropDown();
    });

    function resetTab(){
        $(".overlay").fadeOut("fast");  
        $(".overlay-on-over").removeClass("tabHoverState-mv tabHoverState");
    }

    function tabThruDropDown(){
        //add tabindex to all sub menu items
        $(".sub-menu-nav-btn").attr("tabindex", "0");
        // $(".sub-menu-nav-btn").on("focus", function(){
        //     $(this).addClass("tabHoverState");
        // }).on("blur", function(){
        //     $(this).removeClass("tabHoverState");
        // });
    }

    // $(".menu-btn").on('keypress',function(e) {
    //     if(e.which == 13) {
    //         $(this).mouseenter();
    //     }
    // });

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