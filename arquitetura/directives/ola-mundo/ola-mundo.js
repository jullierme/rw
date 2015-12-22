(function(){
    'use strict';

    angular.module('rw')
        .directive('olaMundo', olaMundo);

    /* @ngInject */
    function olaMundo(){
        return {
            restrict: 'EA',
            template:'<b>Olá mundo. Minha primeira directive</b>'
        };
    }
})();