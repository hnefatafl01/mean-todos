(function(){
    'use strict';

    angular.module('app')
        .component('home', {
            controller: homeController,
            templateUrl: '/app.template.html'
        });

        function homeController() {
            const vm = this;
            vm.onInit = function() {
                console.log('hi');
            }
        }

}())