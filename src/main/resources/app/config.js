export default function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
};

config.$inject = ['$urlRouterProvider'];
