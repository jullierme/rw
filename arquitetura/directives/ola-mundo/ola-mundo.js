(function(){
    'use strict';

    angular.module('rwDirecives')
        .directive('olaMundo', olaMundo);

    /* @ngInject */
    function olaMundo(){
        return {
            restrict: 'EA',
            template:'<b>Olá mundo. Minha primeira directive</b>'
        };
    }
})();