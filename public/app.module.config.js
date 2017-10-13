(function(){
    'use strict';
    angular.module('app').config(config);
    
    config.$inject =['$stateProvider', '$locationProvider', '$urlProvider'];

    function config($stateProvider, $locationProvider, $urlProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                component: 'app'
            })
    }
    
}())