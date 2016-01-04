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
    '$scope', '$http', '$Post',
    function ($scope, $http, $Post) {

        var randomNumber = 11;

        $scope.generateRandom = function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        randomNumber = $scope.generateRandom(10, 11);

        $scope.postSlider = $Post.query({parameter: "slider"});
        $scope.newsSlider = $Post.query({parameter: "news"});
        $scope.randomPost = $Post.query({parameter: randomNumber});

        console.log($scope.randomPost);

        $http({method: 'GET', url: 'data/posts.json'}).
            success(function (data) {
                $scope.posts = data;
            });

    }
]);

mainApp.controller('ArticleController', [
    '$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {

        var patch = 'data/' + $routeParams.id + '.json';

        $http({method: 'GET', url: patch}).
            success(function (data) {
                $scope.post = data[0];
            });

    }
]);
