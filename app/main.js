require.config({
    baseUrl: './',
    paths: {
        'angular': 'vendor/angular/angular',
        'angular-ui-router': 'vendor/angular/angular-ui-router',
        'angular-touch': 'vendor/angular/angular-touch',
        'angular-spinner': 'vendor/angular/angular-spinner',
        'angular-signalr-hub': 'vendor/angular/angular-signalr-hub',
        'angular-animate': 'vendor/angular/angular-animate',
        'angular-sanitize': 'vendor/angular/angular-sanitize',
        'angular-loading-spinner': 'vendor/angular/angular-loading-spinner',
        'angular-local-storage': 'vendor/angular/angular-local-storage.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-animate': {
            deps: [
                'angular'
            ],
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ],
            exports: 'angularUiRouter'
        },
        'angular-sanitize': [
            'angular'
        ],
        'angular-loading-spinner': [
            'angular',
            'angular-spinner'
        ]
    },
    priority: [
        'angular'
    ],
    packages: [

    ]
});


require(['angular',
        'angular-ui-router',
        'require',
        'exports',
        'module',
        'app/controllers/home.controller'], 
    function(angular, ui_router, require, exports, module, homeCtrl){
        var RouteManager = function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            
            $stateProvider
                .state('index', {
                    url: '/',
                    templateUrl: './app/views/home.tpl.html',
                    controller: 'HomeController'
                });
        };

        angular.module('todomvc', ['ui.router'])
                .controller('HomeController', homeCtrl)
                .config(['$stateProvider', '$urlRouterProvider', RouteManager]);
        angular.bootstrap(document, ['todomvc']);
});