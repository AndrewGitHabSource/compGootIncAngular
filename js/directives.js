var mainDirectives = angular.module('mainDirectives', ['ngResource']);

mainDirectives.directive('ngRightPanel', function () {
    return {
        templateUrl: 'template/right_panel.html',
        link: function (scope, elem, attrs) {

            scope.postRight = scope[attrs["ngRightPanel"]];

            console.log(scope.postRight);

        }
    };
});


mainDirectives.directive('ngSlider', function ($timeout) {
    return {
        templateUrl: 'template/main_slider.html',
        link: function (scope, element) {

            scope.postsSlider = scope.postSlider;

            $timeout(function () {
                $(function () {
                    element.bxSlider({
                        infiniteLoop: true,
                        hideControlOnEnd: true,
                        pager: false,
                        nextText: ">",
                        prevText: "<",
                        auto: true,
                        pause: 5000
                    });

                });
            }, 50);

        }
    };
});

mainDirectives.directive('ngNews', function ($timeout) {
    return {
        templateUrl: 'template/news_slider.html',
        link: function (scope, element) {
            $(function () {

                scope.news = scope.newsSlider;

                $timeout(function () {
                    element.bxSlider({
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
                }, 50);


            });
        }
    }
});