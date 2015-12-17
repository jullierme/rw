angular.module('rw')
    .controller('IndexController5', IndexController5);

IndexController5.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController5($scope, $timeout, AlertService, $filter){
    $scope.listaDePessoas = [];//colchetes para arrays
    $scope.entidade = {};//chaves para objetos

    $scope.gridOptions = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.gridItemClick = gridItemClick;
    $scope.getRowStyle = getRowStyle;

    $scope.myClass = 'amarelo';

    iniciar();

    function iniciar(){
        $scope.gridOptions.data = 'listaDePessoas';

        $scope.gridOptions.rowTemplate = 'app/template/row-template.html';

        $scope.gridOptions.columnDefs = [
            {displayName:'Nome', field: 'nome', cellTemplate:'app/template/cell-template.html'},
            {displayName:'Data de nascimento', field: 'nascimento',
                cellTemplate:'app/template/cell-template.html', width:250},
            {displayName:'Sexo', field: 'sexo', cellTemplate:'app/template/cell-template.html', width:150}
        ]
    }

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

    function gridItemClick(linhaSelecionada, indexCol, indexRow){
        AlertService.showInfo('Nome: ' + linhaSelecionada.nome +
            '. IndexCol: ' + indexCol
            + '. IndexRow: ' + indexRow);
    }

    function getRowStyle(linhaSelecionada){
        var myStyle = {};

        myStyle.backgroundColor = linhaSelecionada.cor;

        return myStyle;
    }
}