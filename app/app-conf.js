(function(){
    'use strict';

    angular
        .module('rwDirecives', []);

    angular
        .module('rwServices', []);

    angular
        .module('rwControllers', []);

    angular
        .module('rw', [
            'ngMessages',
            'toastr',
            'ui.grid',
            'ui.router',
            'oc.lazyLoad',
            'angular-keycode',
            'rwDirecives',
            'rwServices',
            'rwControllers',
            'LocalStorageModule',
            'angular-loading-bar'
        ]).config(config);

    function config($stateProvider, $urlRouterProvider, localStorageServiceProvider){

        localStorageServiceProvider.setPrefix('rw');

        var home = {
            url: '/',
            templateUrl: 'app/views/home/home.html'
        };

        var pessoa = {
            abstract: true,
            url: '/pessoa',
            templateUrl: 'app/views/pessoa/pessoa.html'
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


        var cadastroPessoa2 = {
            url: '/cadastro-pessoa',
            templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
            resolve: resolveDeps('app/views/pessoa/cadastro-pessoa-controller.js')
        };
        $stateProvider
            .state('home', home)
            .state('pessoa', pessoa)
            .state('pessoa.cadastro', cadastroPessoa)
            .state('pessoa.pesquisa', pesquisaPessoa)
            .state('cadastro-pessoa', cadastroPessoa2);

        $urlRouterProvider.otherwise('/');
    }
})();


