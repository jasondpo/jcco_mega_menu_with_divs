
var megaMenuWCAG = (function(){

    let tabbingTiming = null;

    $('.overlay-on-over').on("focus", function(){ 
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



    // sub-menu-nav-btns
    $('a').on("focus", function(){
        resetSubcat();
        if($(this).closest(".sub-menu-nav-btn").length > 0){
            $(".sub-menu-nav-btn").removeClass("sub-menu-nav-btn-wcag-active");
            $(this).closest(".sub-menu-nav-btn").addClass("sub-menu-nav-btn-wcag-active");
            openSubCol(this);
        };
    });

    function openSubCol(thisBtn){
        resetSubcat();
        if($(thisBtn).parents(".cat-1-btn").length != 0){
            $('.sub-column-1').show();
            $('.sub-column-1 .sub-menu-btn a').each(function (i){ 
                $(this).attr('tabindex', i + 1); 
            })
            $(".photoBackDrop").css('background-position', '0 -205px');
        }
        if($(thisBtn).parents(".cat-2-btn").length != 0){
            $('.sub-column-2').show();
            $(".photoBackDrop").css('background-position', '0 -410px');
        }
        if($(thisBtn).parents(".cat-3-btn").length != 0){
            $('.sub-column-3').show();
            $(".photoBackDrop").css('background-position', '0 -615px');
        }
        if($(thisBtn).parents(".cat-4-btn").length != 0){
            $('.sub-column-4').show();
            $(".photoBackDrop").css('background-position', '0 -820px');
        }
    }


 


    function resetSubcat(){
        $('.sub-column-1, .sub-column-2, .sub-column-3, .sub-column-4').hide();
        $('.cat-1-btn, .cat-2-btn, .cat-3-btn, .cat-4-btn').removeClass("sub-menu-nav-btn-active");
    }

    function resetTab(){
        $(".overlay").fadeOut("fast");  
        $(".overlay-on-over").removeClass("tabHoverState-mv tabHoverState");
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