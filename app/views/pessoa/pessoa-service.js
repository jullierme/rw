(function () {
    'use strict';

    angular
        .module('rw')
        .service('PessoaService', PessoaService);

    /* @ngInject */
    function PessoaService(dependency) {
        var self = this;
        self.getNomePessoa = getNomePessoa;

        function getNomePessoa(id){
            //chamada back
        }
    }

})();

