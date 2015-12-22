(function(){
    'use strict';

    angular.module('rw')
        .directive('rwCrud', rwCrud);

    /* @ngInject */
    function rwCrud(){
        return {
            transclude:true,
            restrict:'E',
            templateUrl:'arquitetura/directives/rw-crud/rw-crud.html',
            link: link,
            scope:{
                titulo:'@',
                service:'='
            }
        };

        function link(scope, element, attrs){
        }
    }
})();