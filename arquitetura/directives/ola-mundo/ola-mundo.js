(function(){
    'use strict';

    angular.module('rw')
        .directive('olaMundo', olaMundo);

    function olaMundo(){
        return {
            restrict: 'EA',
            template:'<b>Olá mundo. Minha primeira directive</b>'
        };
    }
})();