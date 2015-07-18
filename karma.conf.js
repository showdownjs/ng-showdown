module.exports = function (config) {
  'use strict';
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/showdown/dist/showdown.js',
      'src/*.js',
      'test/**/*.spec.js'
    ],

    reporters: ['coverage'],

    preprocessors: {
      'src/**/*.js' : ['progress', 'coverage']
    },

    //plugins: [
    //  'karma-chai',
    //  'karma-coverage',
    //  'karma-mocha',
    //  'karma-phantomjs-launcher'
    //],

    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },

    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS']

  });
};
