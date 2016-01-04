$(document).ready(function () {

    function setEqualHeight(columns) {
        var maxHeightColumn = 0,
            currentHeight = columns.first().height();

        columns.each(
            function () {
                currentHeight = $(this).height();
                if (currentHeight > maxHeightColumn) {
                    maxHeightColumn = currentHeight;
                }
            }
        );

        columns.height(maxHeightColumn);
    }

    $(".right-side-header select").styler();

    $('.bxslider').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        pager: false,
        nextText: ">",
        prevText: "<",
        auto: true,
        pause: 5000
    });

    $('.slider-post').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 300,
        slideMargin: 20,
        pager: false,
        nextText: ">",
        prevText: "<"
    });


    $(".icon-link").hover(function () {

        $(this).parent().find(".top-link").css({"border-color": "#f26c4f"});

    }, function () {

        $(this).parent().find(".top-link").css({"border-color": "#373737"});

    });

});