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
        'angular-local-storage': 'vendor/angular/angular-local-storage.min',
        'app': 'app'
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
            ]
        },
        'angular-sanitize': [
            'angular'
        ],
        'angular-loading-spinner': [
            'angular',
            'angular-spinner'
        ],
        'app': {
            deps: ['angular', 'angular-ui-router']
        },
    }
});


require(['app/app'], function(app){
    angular.bootstrap(document, ['todomvc']);
    // require(app, controllers, function(){
    // })
});