(function () {
    angular.module('app.components.Home')
        .config(Home);

    Home.$inject = ['$stateProvider'];
    function Home($stateProvider) {
        $stateProvider
            .state('index.home', {
                url: '/home',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                 ncyBreadcrumb: {
                label: 'Thông tin về Chúng tôi:'
            }
            });
    }
})();
