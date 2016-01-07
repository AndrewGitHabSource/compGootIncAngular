var mainDirectives = angular.module('mainDirectives', ['ngResource']);

mainDirectives.directive('ngSlider', function () {
    return {
        templateUrl: 'template/main_slider.html',
        link: function (scope, element, attrs) {

            scope.postsSlider = scope.postSlider;

        }
    };
});

mainDirectives.directive('ngGoSlider', function () {
    return {
        link: function (scope, element) {

            scope.$watch(
                function () {

                    var wrapperElem = document.getElementsByClassName('wrapper-elements'),
                        allElem = angular.element(element).find(".slider-item"),
                        countElem = allElem.length,
                        width = allElem.width(),
                        spaceWidth = width * countElem;


                    angular.element(wrapperElem).css('width', spaceWidth);

                    scope.nextSlide = function () {

                        var margin = angular.element(wrapperElem).css('margin-left'),
                            offset = parseInt(margin).toFixed() - width;

                        if (offset == -spaceWidth) {
                            offset = 0;
                        }
                        angular.element(wrapperElem).css('margin-left', offset);

                    };

                    scope.prevSlide = function () {
                        var offset = parseInt(angular.element(wrapperElem).css('margin-left')) + width;
                        if (offset == width) {
                            offset = -spaceWidth + width;
                        }
                        angular.element(wrapperElem).css('margin-left', offset);
                    };

                }
            );

        }
    };
});


mainDirectives.directive('ngGoNews', function () {
    return {
        link: function (scope, element) {

            scope.$watch(
                function () {

                    var wrapperElem = document.getElementsByClassName('wrapper-carousel'),
                        elem = angular.element(element).find(".carousel-item"),
                        showElements = 3,
                        countElem = elem.length,
                        width = elem.width(),
                        marginNews = parseInt(angular.element(elem).css('margin-right')),
                        spaceWidth = ( width * countElem ) + ( marginNews * countElem ),
                        start = 0,
                        end = -(spaceWidth - ( (marginNews * (showElements) ) ) - (showElements * width) );

                    scope.offset = 0;
                    scope.timer = true;

                    angular.element(wrapperElem).css('width', spaceWidth);

                    scope.next = function () {

                        scope.timer = false;

                        scope.offset = parseInt(angular.element(wrapperElem).css('margin-left'));

                        if (scope.offset == end) {
                            scope.offset = 0;
                        }
                        else {
                            scope.offset = parseInt(angular.element(wrapperElem).css('margin-left')) - (width + marginNews);
                        }
                        angular.element(wrapperElem).css('margin-left', scope.offset);

                    };

                    scope.prev = function () {

                        scope.offset = parseInt(angular.element(wrapperElem).css('margin-left'));
                        if (scope.offset == start) {
                            scope.offset = end;
                        }
                        else {
                            scope.offset = parseInt(angular.element(wrapperElem).css('margin-left')) + (width + marginNews);
                        }

                        angular.element(wrapperElem).css('margin-left', scope.offset);
                    };


                }
            );


        }
    };
});


mainDirectives.directive('ngNews', function ($timeout) {
    return {
        templateUrl: 'template/news_slider.html',
        link: function (scope, element) {

            scope.news = scope.newsSlider;

        }
    }
});
