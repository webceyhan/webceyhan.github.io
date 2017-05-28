jQuery(function ($) {

    /*----------------------------------------------------*/
    /* FitText Settings
    ------------------------------------------------------ */

    setTimeout(function () {
        $('h1.responsive-headline').fitText(1, {
            minFontSize: '40px',
            maxFontSize: '90px'
        });
    }, 100);


    /*----------------------------------------------------*/
    /*	Make sure that #header-background-image height is
    /* equal to the browser height.
    ------------------------------------------------------ */

    $('header').css({
        'height': $(window).height()
    });
    $(window).on('resize', function () {

        $('header').css({
            'height': $(window).height()
        });
        $('body').css({
            'width': $(window).width()
        })
    });

});