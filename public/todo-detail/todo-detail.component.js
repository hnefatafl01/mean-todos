(function(){
    angular.module('app')
        .component({
            controller: detailController,
            templateUrl: '/todo-detail/todo-detail.template.html'
        })

    function detailController() {
        const vm = this;
        vm.$onInit = function() {
            console.log('detail controller');
        }
    }
}())