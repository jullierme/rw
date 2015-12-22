(function(){
    'use strict';

    angular.module('rw')
        .factory('RwService', RwService);

    /* @ngInject */
    function RwService(AlertService){
        return function(controller){
            var self = this;
            self.controller = controller;

            self.entidade = {};

            self.salvar = salvar;
            self.excluir = excluir;
            self.limpar = limpar;
            self.pesquisar = pesquisar;

            self.onAntesDeSalvar = onAntesDeSalvar;
            self.onDepoisDeSalvar = onDepoisDeSalvar;

            function onAntesDeSalvar(){
                return true;
            }

            function onDepoisDeSalvar(){

            }

            function salvar(){
                if(!self.onAntesDeSalvar()){
                    return;
                }

                //chamada rest no back, utilizando o controller

                AlertService.showSuccess('Registro salvo com sucesso!');

                self.onDepoisDeSalvar();
            }

            function excluir(){
                //chamada rest no back, utilizando o controller
            }

            function limpar(){
                self.entidade = {};
                //chamada rest no back, utilizando o controller
            }

            function pesquisar(){
                //chamada rest no back, utilizando o controller
            }
        };
    }
})();