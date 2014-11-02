module.exports = function(grunt) {
    var transport = require('grunt-cmd-transport');
    grunt.initConfig({
        pkg: grunt.file.readJSON("gruntCfg.json"),
        transport: {
            app1: {
                // options: {
                //     idleading: '.'
                // },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: '.build',
                }]
            }
        },
        concat: {
            app1: {
                options: {
                    include: 'all'
                },
                files: [{
                    expand: true,
                    cwd: '.build/',
                    src: ['**/*.js'],
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
                    src: ['*.js', '!*-debug.js'],
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
    grunt.registerTask('build-app2', ['transport:app1', 'concat:app1']);
    grunt.registerTask('build-app1', ['transport:app1', 'concat:app1', 'uglify:app1', 'clean']);
    //    grunt.registerTask('default', ['clean']);
};
