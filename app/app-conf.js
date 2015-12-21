(function(){
    'use strict';
    angular
        .module('rw', [
            'ngMessages',
            'toastr',
            'ui.grid',
            'ui.router',
            'oc.lazyLoad'
        ]).config(config);

    function config($stateProvider, $urlRouterProvider){
        var home = {
            url: '/',
            templateUrl: 'app/views/home/home.html'
        };

        var pessoa = {
            abstract: true,
            url: '/pessoa',
            template: '<ui-view/>'
        };

        var cadastroPessoa = {
            url: '/cadastro',
            templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
            resolve: resolveDeps('app/views/pessoa/cadastro-pessoa-controller.js')
        };

        var pesquisaPessoa = {
            url: '/pesquisa',
            templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',
            resolve: resolveDeps('app/views/pessoa/pesquisa-pessoa-controller.js')
        };

        function resolveDeps(file){
            return {
                dependencias: /* @ngInject */ function ($ocLazyLoad) {
                    return $ocLazyLoad.load(file);
                }
            };
        }

        $stateProvider
            .state('home', home)
            .state('pessoa', pessoa)
            .state('pessoa.cadastro', cadastroPessoa)
            .state('pessoa.pesquisa', pesquisaPessoa);

        $urlRouterProvider.otherwise('/');
    }
})();


