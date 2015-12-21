(function(){
    'use strict';

    module.exports = function(grunt) {

        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

        grunt.initConfig({
            jshint: {
                options: {
                    jshintrc: true
                },
                app: ['app/**/*.js']
            },
            copy: {
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['app/**','*.html'],
                            dest: 'build/'
                        }
                    ]
                }
            },
            concat: {
                appJs:{
                    src: [
                        'build/app/**/*.js',
                        '!build/app/**/*-controller.js'
                    ],
                    dest: 'build/app.js'
                },
                appCss:{
                    src: 'build/app/**/*.css',
                    dest: 'build/app.css'
                }
            },
            clean: {
                app: {
                    src: 'build'
                },
                build:{
                    src: [
                        'build/app/controller',
                        'build/app/filter',
                        'build/app/messages',
                        'build/app/service',
                        'build/app/template',
                        'build/app/**/*-service.js'
                    ]
                }
            },
            ngAnnotate: {
                options: {
                    singleQuotes: true
                },
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.js']
                        }
                    ]
                }
            },
            uglify: {
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.js']
                        }
                    ]
                }
            },
            cssmin: {
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.css']
                        }
                    ]
                }
            },
            htmlmin: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.html']
                        }
                    ]
                }
            }
        });

        grunt.registerTask( 'build', [
            'clean:app',
            'copy',
            'ngAnnotate',
            'concat',
            'uglify',
            'cssmin',
            'htmlmin',
            'clean:build',
        ]);
    };

})();