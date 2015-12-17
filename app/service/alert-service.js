angular.module('rw')
    .service('AlertService', AlertService);

function AlertService(toastr){
    this.showSuccess = showSuccess;
    this.showError = showError;
    this.showWarning = showWarning;
    this.showInfo = showInfo;

    function showSuccess(mensagem, titulo){
        if(!titulo){
            titulo = 'Ok';
        }

        toastr.success(mensagem, titulo);
    }

    function showError(mensagem, titulo){
        if(!titulo){
            titulo = 'Erro';
        }

        toastr.error(mensagem, titulo);
    }

    function showWarning(mensagem, titulo){
        if(!titulo){
            titulo = 'Aviso';
        }

        toastr.warning(mensagem, titulo);
    }

    function showInfo(mensagem, titulo){
        if(!titulo){
            titulo = 'Info';
        }

        toastr.info(mensagem, titulo);
    }
}
