(function () {
    'use strict';

    angular
        .module('rw')
        .service('ProdutoService', ProdutoService);

    /* @ngInject */
    function ProdutoService(RwService) {
        var self = this;
        self.getRwService = getRwService;

        function getRwService(){
            var rws = new RwService('produtoController');
            return rws;
        }
    }

})();

