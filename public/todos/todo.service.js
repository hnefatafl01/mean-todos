(function(){
    'use strict';
    angular.module('app')
        .service('todoService', todoService)

    const API_URL = 'http://localhost:3000/api';
    function todoService($http) {
        this.getTodos = function() {
            return $http.get(`${API_URL}/todos`);
        }
        this.addTodo = function(newTodo) {
            return $http.post(`${API_URL}/todos`, newTodo).then((response) => {
                return response.data;
            });
        }
    }
}());