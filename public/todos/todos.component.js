(function(){
    'use strict';
    angular.module('app')
        .component('home', {
            controller: homeController,
            templateUrl: '/todos/todos.template.html'
        });

        homeController.$inject = ['$scope', 'todoService'];
        function homeController($scope, todoService) {

            const vm = this;

            vm.$onInit = function() {
                todoService.getTodos().then((response) => {
                    vm.todos = response.data;
                })
            }

            vm.onAddTodo = function(e) {
                e.preventDefault();
                // $scope.$watch('todos', (change) => {
                    // vm.todos = change;
                    // console.log(change);
                todoService.addTodo(vm.todo)
                // })
                todoService.getTodos().then((response) => {
                    vm.todos = response.data;
                })
                // delete vm.todo.name;
            }

            vm.onDeleteTodo = function(todo) {
                todoService.deleteTodo(todo._id);
                todoService.getTodos().then((response) => {
                    vm.todos = response.data;
                })
            }
            
        }

}())

// funny video
// https://www.youtube.com/watch?v=6x31lI8JdXY