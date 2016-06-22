module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt); 

    grunt.initConfig({

	    // r.js compile config
	    requirejs: {
	        dist: {
	            options: {
	                baseUrl: 'app/',
	                name: './app.js',
	                mainConfigFile: ['app/main.js'],
	                out: 'dist/built.js',
	                preserveLicenseComments: false,
	                removeCombined: true,
	                useStrict: true,
	                wrap: false,
	                fileExclusionRegExp: /^tests$/
	            }
	        }
	    }
    });
}