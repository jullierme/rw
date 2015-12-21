(function () {
    'use strict';

    angular
        .module('rw')
        .controller('PesquisaPessoaController', PesquisaPessoaController);

    /* @ngInject */
    function PesquisaPessoaController() {
        var vm = this;
        vm.sobrenome = 'Silva Barros';
    }
})();

