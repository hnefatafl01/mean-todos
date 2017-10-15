(function(){
    'use strict';
    angular.module('app')
        .component('home', {
            controller: homeController,
            templateUrl: '/todos/todos.template.html'
        });

        homeController.$inject = ['$scope','$interval', '$timeout', 'todoService'];
        function homeController($scope, $interval, $timeout, todoService) {
            const vm = this;
            
            vm.$onInit = function() {
                vm.tagline = '';
                const changeTag = '...do it now!';
                let i = 0;
                $interval(() => {
                    vm.tagline += changeTag[i];
                    ++i;
                }, 400, 13, true);
                
                    
                

                todoService.getTodos().then((response) => {
                    vm.todos = response.data;
                })
            }

            vm.onAddTodo = function(e) {
                e.preventDefault();
                if (vm.todo) {
                    todoService.addTodo(vm.todo);
                    todoService.getTodos().then((response) => {
                        vm.todos = response.data;
                    }).then(() => {
                        delete vm.todo.name;
                    })
                } else {
                    vm.valid = false;
                }
                
                
            }

            vm.onDeleteTodo = function(todo) {
                todoService.deleteTodo(todo._id);
                todoService.getTodos().then((response) => {
                    vm.todos = response.data;
                })
            }
            
        }

}())

