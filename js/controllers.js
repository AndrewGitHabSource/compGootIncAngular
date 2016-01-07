'use strict';

var mainApp = angular.module('mainApp', ['ngRoute', 'ngResource', 'ngSanitize', 'mainServices', 'mainDirectives']);

mainApp.config([
    '$routeProvider',
    function ($routeProvide) {
        $routeProvide
            .when('/', {
                templateUrl: 'template/home.html',
                controller: 'HomeController'
            })
            .when('/article/:id', {
                templateUrl: 'template/article.html',
                controller: 'ArticleController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);

mainApp.controller('HomeController', [
    '$scope', '$http', 'GetPost',
    function ($scope, $http, GetPost) {

        var ctrl = this;

        this.postSlider = GetPost.query({ parameter: "slider" });
        this.newsSlider = GetPost.query({ parameter: "news" });
        this.posts      = GetPost.query({ parameter: "posts" });

        return angular.extend($scope, ctrl);

    }
]);

mainApp.controller('RightController', [
    '$scope', '$http', 'GetPost',
    function ($scope, $http, GetPost) {

        var number = 10,
            ctrlRight = this;

        this.generateRandom = function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        number = this.generateRandom(8, 8);

        this.postRandom = null;

        GetPost.query({ parameter: "posts"}, function(data) {

            ctrlRight.postRandom = data[number - 1];

        });

    }
]);


mainApp.controller('ArticleController', [
    '$scope', '$http', '$routeParams', 'GetPost',
    function ($scope, $http, $routeParams, GetPost) {

        GetPost.query({ parameter: "posts"}, function(data) {
            $scope.post = data[$routeParams.id - 1];
        });

    }
]);

