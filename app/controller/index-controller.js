angular.module('rw')
    .controller('IndexController', IndexController);























/* @ngInject */
function IndexController($scope){
    $scope.nome = 'Jullierme';
    $scope.onClickTeste = onClickTeste;

    function onClickTeste(){
        $scope.nome = 'Teste alteção via javascript';
    }
}