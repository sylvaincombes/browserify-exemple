module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dev: {
                files: {
                    'assets/js/app.js': ['assets/js/src/app.js']
                },
                options: {
                    watch: true,
                    keepAlive: true,
                    browserifyOptions: {
                        debug: true
                    }
                }
            },
            prod: {
                files: {
                    'assets/js/app.min.js': ['assets/js/src/app.js']
                },
                options: {
                    watch: false,
                    keepAlive: false,
                    browserifyOptions: {
                    }
                }
            }
        },
        uglify: {
            prod: {
                files: {
                    'assets/js/app.min.js': ['assets/js/app.min.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['browserify']);
    grunt.registerTask('release', ['browserify:prod', 'uglify']);

};
