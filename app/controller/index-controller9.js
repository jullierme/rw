(function () {
    'use strict';

    angular.module('rw')
        .controller('IndexController9', IndexController9);

    /* @ngInject */
    function IndexController9($http) {
        var vm = this;
        vm.carregarDados = carregarDados;
        vm.gridOptions = {};
        vm.lista = [];

        iniciar();

        function iniciar(){
            vm.gridOptions.data = 'vm.lista';
        }

        function carregarDados(){
            var promisse = $http.get('http://jsonplaceholder.typicode.com/photos');

            promisse.then(carregarDadosResult, carregarDadosFault);
        }

        function carregarDadosResult(response){
            vm.lista = response.data;
        }

        function carregarDadosFault(response){

        }
    }
})();

