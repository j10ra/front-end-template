//-------------------------------/
'use strict';
//-------------------------------/

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({

		watch: {
			css: {
				files: 'app/assets/scss/**/*.scss',
				tasks: ['compass:dev']
			},
			js: {
				files: ['app/assets/js/**/*.js'],
				tasks: ['newer:copy:js']
			},
			html: {
				files: ['app/**/*.hbs'],
				tasks: ['assemble']
			},
			img: {
				files: ['app/assets/images/**/*.{jpg,gif,png}'],
				tasks: ['newer:copy:img']
			},
			fonts: {
				files: ['app/assets/fonts/**/*.{otf,ttf,woff,eot}'],
				tasks: ['newer:copy:fonts']
			},
			json: {
				files: ['app/data/**/*.json'],
				tasks: ['assemble']
			},
			livereload: {
				options: {
					livereload: 35729
				},
				files: [
					'app/**/*.hbs',
					'app/assets/css/**/*.scss',
					'app/assets/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		connect: {
			options: {
				port: 9090,
				hostname: 'localhost', // change this to '0.0.0.0' to access the server from outside
				livereload: 35729
			},
			livereload: {
				options: {
					middleware: function(connect) {
						return [
							connect.static('build')
						];
					}
				}
			},
			dist: {
				options: {
					middleware: function(connect) {
						return [
							connect.static('build')
						];
					}
				}
			}
		},

		assemble: {
			options: {
				assets: 'app/assets',
				partials: ['app/partials/**/*.hbs'],
				layoutdir: 'app/layouts',
				data: ['app/data/**/*.{json,yml}']
			},
			site: {
				options: {
					layout: 'layout.hbs',
					assets: 'build/assets'
				},
				expand: true,
				cwd: 'app/pages/',
				src: ['**/*.hbs'],
				dest: 'build/'
			}
		},

		jshint: {
			all: [
				'app/assets/js/**/*.js',
				'!app/assets/js/plugins.js',
				'!app/assets/js/library/**/*.js'
			]
		},

		compass: {
			build: {
				options: {
					sassDir: 'app/assets/scss',
					cssDir: 'build/assets/css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'app/assets/scss',
					cssDir: 'build/assets/css',
                    sourcemap: true,
					noLineComments: true
				}
			}
		},

		copy: {
            js: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/js/',
                    src: '**/*.js',
                    dest: 'build/assets/js/'
                }]
            },
            img: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/images/',
                    src: '**/*',
                    dest: 'build/assets/images/'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/fonts/',
                    src: '**/*',
                    dest: 'build/assets/fonts/'
                }]
            },
            etc: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: '*.{png,ico,jpg,gif,md,txt}',
                    dest: 'build/'
                }]
            }
		},

		uglify: {
			mainjs: {
				src: 'app/assets/js/main.js',
				dest: 'build/assets/js/main.min.js'
			},
			pluginjs: {
				src: 'app/assets/js/plugins.js',
				dest: 'build/assets/js/plugins.min.js'
			},
			helperjs: {
				src: 'app/assets/js/helper.js',
				dest: 'build/assets/js/helper.min.js'
			},
			iejs: {
				src: 'app/assets/js/ie.js',
				dest: 'build/assets/js/ie.min.js'
			}
		},

		clean: {
			html: ['build/**/*.html'],
			js: ['build/assets/js'],
			css: ['build/assets/css'],
			img: ['build/assets/images'],
            fonts: ['build/assets/fonts']
		},

        pngmin: {
            compile: {
                options: {
                    ext: '.png',
                    force: true,
                    quality: '65-80',
                    concurrency: 8
                },
                files: [
                    {
                        expand: true, // required option
                        src: ['**/*'],
                        cwd: 'app/assets/images/', // required option
                        dest: 'build/assets/images/'
                    }
                ]
            }
        }

	});

	grunt.loadNpmTasks('assemble'); // Special case

	// Default task(s).
	grunt.registerTask('default', [
		'clean',
        'assemble',
        'compass:dev',
		'jshint',
		'connect:livereload',
        'copy',
		'watch'
	]);

    grunt.registerTask('build', [
        'clean',
        'assemble',
        'compass:build',
        'jshint',
        'uglify',
        'copy',
        'pngmin'
    ]);

};