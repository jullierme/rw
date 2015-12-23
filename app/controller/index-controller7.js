(function () {
    'use strict';

    angular.module('rw')
        .controller('IndexController7', IndexController7);

    /* @ngInject */
    function IndexController7(AlertService, PessoaService, SessionService) {
        var vm = this;
        vm.rwService = PessoaService.getRwService();
        vm.rwService.onAntesDeSalvar = onAntesDeSalvar;
        vm.rwService.onAntesDeExcluir = onAntesDeExcluir;
        vm.testeEnter = testeEnter;

        function testeEnter(){
            AlertService.showInfo('Enter precionado');
        }

        function onAntesDeExcluir(){
            AlertService.showInfo(SessionService.get('teste'));
        }

        function onAntesDeSalvar(){
            SessionService.set('teste', true);

            AlertService.showInfo(SessionService.get('teste'));

            if(vm.rwService.entidade.nome === 'rw'){
                AlertService.showError('Nome não permitido');

                return false;
            }

            return true;
        }
    }
})();

