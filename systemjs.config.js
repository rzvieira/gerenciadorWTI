/**
 * System configuration for angular 2 samples
 * Adjust as necessary for your application needs
 */

(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'node_modules': 'node_modules'
        },

        // map tells the System loader where to look for things
        map:{
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
            '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
            '@angular/http/testing': 'node_modules/@angular/http/bundles/http-testing.umd.js',
            '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'node_modules/rxjs',
            'services' : '/services', 
            'angular-in-memory-web-api': 'nnode_modulespm/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },

        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);