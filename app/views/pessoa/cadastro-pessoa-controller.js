(function () {
    'use strict';

    angular
        .module('rw')
        .controller('CadastroPessoaController', CadastroPessoaController);

    /* @ngInject */
    function CadastroPessoaController() {
        var vm = this;
        vm.nome = 'Jullierme';

    }

})();

