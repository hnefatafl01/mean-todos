(function(){
    'use strict';
    angular.module('app').config(config);
    config.$inject = ['$stateProvider', '$locationProvider'];
    function config($stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                component: 'home'
            })
            .state({
                name: 'todo-detail',
                url: '/edit/:id',
                component: 'todo-detail'
            })
    }
}())