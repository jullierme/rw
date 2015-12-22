(function () {
    'use strict';

    angular.module('rw')
        .controller('IndexController7', IndexController7);

    /* @ngInject */
    function IndexController7(AlertService, PessoaService) {
        var vm = this;
        vm.rwService = PessoaService.getRwService();
        vm.rwService.onAntesDeSalvar = onAntesDeSalvar;
        vm.testeEnter = testeEnter;

        function testeEnter(){
            AlertService.showInfo('Enter precionado');
        }

        function onAntesDeSalvar(){
            if(vm.rwService.entidade.nome === 'rw'){
                AlertService.showError('Nome não permitido');

                return false;
            }

            return true;
        }
    }
})();

