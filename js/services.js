'use strict';

var mainServices = angular.module('mainServices', ['ngResource']);

mainServices.factory('GetPost', ['$resource',
    function ($resource) {
        return $resource('data/:parameter.json', {param: ""}, {
            query: { method: 'GET', params: { parameter: 'posts' }, isArray: true }
        });
    }]);
