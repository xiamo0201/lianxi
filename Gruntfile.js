module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        watch: {
            js:{
                files: 'resource/js/*.js',
                tasks:  ['uglify:common']
            },
            css:{
                files: 'resource/css/*.css',
                tasks:  ['cssmin:minify']
            }
        },
        connect: {
            options: {
                port: 3001,
                hostname: 'localhost',
                livereload: 35727
            }
        },
        cssmin: {
            minify:{
                options: {
                    banner: '/* <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
                },
                files: {
                    'resource/build/common-concat-min.css':[
                        'resource/css/common.css'
                         
                        // 'resource/css/module-config.css',
                        // 'resource/css/monitor.css',
                     
                    ]
                }
            }
        },
        uglify: {
          options: {
            banner:'/*<%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
          },
          common: {
              files:{'resource/build/common-concat-min.js':[
                     "resource/lab/jquery-2.1.0.min.js",
                     "resource/lab/angular.js",
                     "resource/lab/angular-ui-router.js",


                     "resource/js/main.js"
                     ]
              }
           }
           // business:{
           //      files:{'':[
           //          ]
           //      }
           // }
        }
    });
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('server', function(target) {
        grunt.task.run([
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'cssmin',
        'uglify',
        'server'
    ]);
};