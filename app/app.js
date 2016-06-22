
define(['angular',
        'angular-ui-router', './controllers/_index'], function (angular, ui_router, controllers) {

    var RouteManager = function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('homepage', {
                url: '/',
                templateUrl: '<h1>{{title}}</h1> <p>{{message}}</p>',
                controller: homeCtrl
            });
        $urlRouterProvider.otherwise('/');
    };

    RouteManager.$inject = ['$stateProvider', '$urlRouterProvider'];


    angular.module('todomvc', ['ui.router']).config(RouteManager);
});