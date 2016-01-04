'use strict';

var mainServices = angular.module('mainServices', ['ngResource']);

mainServices.factory('$Post', ['$resource',
    function ($resource) {
        return $resource('data/:parameter.json', {}, {
            query: {method: 'GET', params: {parameter: 'posts'}, isArray: true}
        });
    }]);
