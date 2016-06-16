
// define([
//     'angular',
//     'require',
//     'exports',
//     'module',
//     'app/controllers/home.controller'
// ], function (angular, require, exports, module, homeCtrl) {

//     var RouteManager = function ($stateProvider, $urlRouterProvider) {
//         $stateProvider
//             .state('homepage', {
//                 url: '/',
//                 templateUrl: './views/home.tpl.html',
//                 controller: homeCtrl
//                 // views: {
//                 //     'appview@': {
//                 //     }
//                 // }
//             });
//         $urlRouterProvider.otherwise('/');
//     };

//     RouteManager.$inject = ['$stateProvider', '$urlRouterProvider'];

//     return angular.module('todomvc', [])
//             .controller('HomeController', homeCtrl)
//             .config(RouteManager);
// });