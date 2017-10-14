(function(){
    'use strict';
    angular.module('app')
        .component('home', {
            controller: homeController,
            templateUrl: '/todos/todos.template.html'
        });

        homeController.$inject = ['todoService'];
        function homeController(todoService) {

            const vm = this;

            vm.$onInit = function() {

                todoService.getTodos().then((response) => {
                    vm.todos = response.data;
                })
            }
        }

}())