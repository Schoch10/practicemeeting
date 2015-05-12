var path = require('path');

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            js: {
                 files:  [ 'routes/*.js', 'public/javascripts/base.js' ],
                 tasks:  [ 'jshint', 'karma', 'express' ],
                 options: {
                    spawn: false
                }
           },
           scss: {
               files: ['scss/*.scss'],
               tasks: ['scsslint', 'sass'],
               options: {
                   spawn: false
               }
           },
        },     
        express: {
            dev: {
                options: {
                    bases: ['./bin/www'],
                    server: './app.js',
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },
        scsslint: {
            allFiles: ['scss/*.scss',],
            options: {
                config: '.scss-lint.yml',
                reporterOutput: 'scss-lint-report.xml',
                colorizeOutput: true
            },
        },
        jshint: {
            all: ['Gruntfile.js', 'public/javascripts/**/*.js']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        sass: {
            dist: {
        	   files: {
        	       './public/stylesheets/main.css' : './scss/main.scss'
        	   }
            }  
        }, 
        open: {
            all: {
                path: 'http://localhost:8080/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('server', ['scsslint', 'jshint', 'karma', 'express:dev', /*'open'*,*/ 'watch']);
};