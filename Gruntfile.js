module.exports = function(grunt) {

    "use strict"
    
    grunt.initConfig({
        // concat: {
        //   dist: {
        //       src: ["src/a.js", "src/b.js"]
        //     , dest: "dist/app.js"
        //   }
        // }
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: "assets/js/*.js",
                tasks: ["uglify", "jshint"]
            },
            css: {
                files: "assets/css/*.css",
                tasks: "css"
            },
            html: {
                files: "*.html"
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: ".",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask( "default", [ "connect", "watch" ]);
};