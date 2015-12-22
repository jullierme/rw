(function(){
    'use strict';

    angular.module('rw')
        .directive('rwEnter', rwEnter);

    /* @ngInject */
    function rwEnter(KeyCode){
        return {
            restrict:'A',
            link: link
        };

        function link(scope, element, attrs){
            element.bind('keydown', onKeydown);

            function onKeydown(event){
                var code = event.keyCode || event.which;

                if(code === KeyCode.ENTER){
                    scope.$eval(attrs.rwEnter);
                }
            }
        }
    }
})();