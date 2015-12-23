(function () {
    'use strict';

    angular.module('rw')
        .controller('IndexController10', IndexController10);

    /* @ngInject */
    function IndexController10(PessoaService) {
        var vm = this;
        vm.carregarDados = carregarDados;
        vm.gridOptions = {};
        vm.lista = [];

        iniciar();

        function iniciar(){
            vm.gridOptions.data = 'vm.lista';
        }

        function carregarDados(){
            PessoaService.getListaDePessoas()
                .then(carregarDadosResult, carregarDadosFault);
        }

        function carregarDadosResult(response){
            vm.lista = response.data;
        }

        function carregarDadosFault(response){
        }
    }
})();

