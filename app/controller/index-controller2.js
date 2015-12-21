(function(){
    'use strict';

    angular.module('rw')
        .controller('IndexController2', IndexController2);

    /* @ngInject */
    function IndexController2($scope){
        var vm = this;
        vm.nome = '';
        vm.myStyle = {};
        vm.myClass = '';

        $scope.$watch('vm.nome', function(newValue, oldValue){
            if(newValue === oldValue){
                return;
            }

            if(newValue === 'Maria'){
                vm.myClass = 'amarelo';
            }
            else {
                vm.myClass = 'verde';
            }
        });
    }
})();