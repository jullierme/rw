(function(){
    'use strict';

    /**
     * @ngdoc directive
     * @name rwDirecives.directive:rwInputText
     * @element rw-input-text
     * @scope
     * @restrict E
     *
     * @description
     * Componente de input text padrão da arquitetura rw. Este input já possui
     * as mensagens de validação (ng-messages) internamente.
     *
     * @param {string} label Texto a ser exibido na parte superior do input
     * @param {string} placeholder Texto a ser exibido dentro do input
     * @param {object} ngModel ngModel do input
     * @param {boolean} ngRequired informar se o input é obrigatório
     * @param {number} ngMaxlength informar o tamanho máximo do campo
     * @param {number} ngMinlength informar o tamanho mínimo do campo
     * @param {number} colspan informar a quantidade de colunas que o input vai
     * utilizar
     * @example
     <example module="rwDirecives">
         <file name="index.html">
             <rw-input-text label="Nome"
                 placeholder="Nome da pessoa"
                 ng-model="vm.rwService.entidade.nome"
                 ng-required="true"
                 ng-maxlength="50"
                 colspan="3">
             </rw-input-text>
         </file>
     </example>
     **/
    angular.module('rwDirecives')
        .directive('rwInputText', rwInputText);

    /* @ngInject */
    function rwInputText(){
        return {
            require:'^form',
            restrict:'E',
            templateUrl:'arquitetura/directives/rw-input-text/rw-input-text.html',
            scope:{
                label:'@',
                placeholder:'@',
                ngModel:'=',
                ngRequired:'=?',
                ngMaxlength:'@',
                ngMinlength:'@',
                colspan:'@'
            },
            link: link
        };

        function link(scope, element, attrs, formControll){
            scope.myForm = formControll;
            scope.myClass = 'col-sm-' + attrs.colspan;

            scope.inputName = scope.$id + 'inputText';
        }
    }
})();

