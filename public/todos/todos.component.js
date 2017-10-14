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
                vm.todo = '';
                todoService.getTodos().then((response) => {
                    vm.todos = response.data;
                })
            }

            vm.OnAddTodo = function(todo) {
                console.log(todo);
            }
        }

}())

// https://www.youtube.com/watch?v=6x31lI8JdXY