module.exports = function(grunt) {
    var transport = require('grunt-cmd-transport');
    grunt.initConfig({
        pkg: grunt.file.readJSON("gruntCfg.json"),
        transport: {
            options: {
                paths: ['src'],
                alias: '<%= pkg.spm.alias %>'
            },
            app1: {
                options: {
                    idleading: 'src'
                },
                files: [{
                    src: '*.js',
                    filter: 'isFile',
                    dest: '.build/app'
                }]
            }
        },
        concat: {
            options: {
                paths: ['.'],
                include: 'relative'
            },
            app1: {
                options: {
                    include: 'all'
                },
                files: [{
                    expand: true,
                    cwd: '.build/',
                    src: ['src/*.js'],
                    dest: 'dist/',
                    ext: '.js'
                }]
            }
        },
        uglify: {
            app1: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['src/*.js', '!src/*-debug.js'],
                    dest: 'dist/',
                    ext: '.js'
                }]
            }
        },
        clean: {
            spm: ['.build']
        }
    });
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build-app1', ['transport:app1', 'concat:app1', 'uglify:app1', 'clean']);
    //    grunt.registerTask('default', ['clean']);
};
