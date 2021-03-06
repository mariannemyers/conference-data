/*global module*/
// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  'use strict';

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=drawing',
      'ui/app/bower_components/angular/angular.js',
      'ui/app/bower_components/angular-route/angular-route.js',
      'ui/app/bower_components/angular-cookies/angular-cookies.js',
      'ui/app/bower_components/angular-mocks/angular-mocks.js',
      'ui/app/bower_components/jquery/jquery.js',
      'ui/app/bower_components/ckeditor/ckeditor.js',
      'ui/app/bower_components/ng-ckeditor/ng-ckeditor.js',
      'ui/app/bower_components/mlFacets/dist/ml-facets.js',
      'ui/app/common/**/*.js',
      'ui/app/create/**/*.js',
      // 'ui/test/**/*.js'
      'ui/test/helpers.js',
      'ui/test/spec/common/**/*.js'
    ],

    // generate js files from html templates
    preprocessors: {
      'ui/app/scripts/**/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'ui/app',
      moduleName: 'app-templates'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 15472,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
