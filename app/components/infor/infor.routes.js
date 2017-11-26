(function () {
    angular.module('app.components.infor')
        .config(Infor);

    Infor.$inject = ['$stateProvider'];
    function Infor($stateProvider) {
        $stateProvider
            .state('index.infor', {
                url: '/infor',
                templateUrl: 'app/components/infor/infor.html',
                controller: 'InforController',
                controllerAs: 'vm',
                 ncyBreadcrumb: {
                label: 'Thông tin về Chúng tôi:'
            }
            });
    }
})();
