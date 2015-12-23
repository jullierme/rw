(function () {
    'use strict';

    angular
        .module('rw')
        .service('PessoaService', PessoaService);

    /* @ngInject */
    function PessoaService(RwService, $http, $q) {
        var self = this;
        self.getRwService = getRwService;
        self.getListaDePessoas = getListaDePessoas;

        function getRwService(){
            return new RwService('pessoaController');
        }

        function getListaDePessoas(){
            var deferred  = $q.defer();

            if(1 === 1){
                deferred.reject('Motivo da rejeição');

                return deferred.promise;
            }

            $http.get('http://jsonplaceholder.typicode.com/photos').then(
                function(response){
                    deferred.resolve(response);
                },
                function(rejection){
                    deferred.reject(rejection);
                }
            );

            return deferred.promise;
        }
    }

})();

