angular.module('rw')
    .controller('IndexController4', IndexController4);

IndexController4.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController4($scope, $timeout, AlertService, $filter){
    $scope.listaDePessoas = [];//colchetes para arrays
    $scope.entidade = {};//chaves para objetos
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    $scope.myClass = 'amarelo';

    function setTouched(){
        angular.forEach($scope.myForm.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            })
        });
    }
    function setUntouched(){
        angular.forEach($scope.myForm.$error, function(error){
            angular.forEach(error, function(field){
                field.$setUntouched();
            })
        });
    }

    function salvar(){
        var str = '';

        if(typeof srt === 'string'){

        }
        var dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        AlertService.showInfo(dataStr);

        if($scope.myForm.$invalid){
            setTouched();

            AlertService.showError('Verifique os campos do formulário');
            return;
        }

        AlertService.showSuccess('Registro salvo com sucesso');

        $scope.listaDePessoas.push($scope.entidade);
        limpar();
    }

    function limpar(){
        $scope.entidade = {};

        $timeout(function(){
            setUntouched();
        },50);
    }

    function excluir(){
    }
}