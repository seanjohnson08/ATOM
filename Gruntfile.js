module.exports = function (grunt) {

	// load all grunt-task plugins
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		servers: grunt.file.expand({cwd: '/Volumes'}, "*.com"),
		workingPath: function () {
			var servers = grunt.config('servers');
			return '/Volumes/' + (
						servers.length > 1 ?
							'{' + servers.join(', ') + '}' :
							servers[0]
					);
		},

		jshint: {
			all: {
				src: [
					'<%= workingPath() %>/*.js',
					'<%= workingPath() %>/includes/*.js',
					'<%= workingPath() %>/includes/**/*.js',
					'<%= workingPath() %>/_assets/apps/**/js/*.js',
					'<%= workingPath() %>/_assets/js/*.js',
					'<%= workingPath() %>/_assets/js/**/*.js',

					//Excludes
					'!<%= workingPath() %>/includes/JS/common.js',

				],
				options: {

				}
			},
			single: {
				src: 'Gruntfile.js',
				options: {

				}
			}
		},

		compass: {
			compress: {
				options: {
					outputStyle: 'compressed',
					sassDir: '<%= workingPath() %>/_assets/scss/',
					cssDir: '<%= workingPath() %>/_assets/css/'
				}
			}
		},

		uglify: {
			compress: {
				files: {
					'<%= workingPath() %>/includes/JS/common.js': [
						'<%= workingPath() %>/includes/js/jquery.js',
						'<%= workingPath() %>/includes/js/jquery.tools.js',
						'<%= workingPath() %>/includes/js/jquery.ba-postmessage.min.js',
						'<%= workingPath() %>/includes/JS/main.js',
						'<%= workingPath() %>/includes/JS/lib/deux/*.js'
					]
				},
				options: {
					mangle: false
				}
			}
		},

		watch: {
			scripts: {
				files: [ '<%= jshint.all.src %>'],
				tasks: ['jshint:single', 'uglify:compress'],
				options: {
					spawn: false
				}
			},
			sass: {
				files: [
					'<%= workingPath() %>/_assets/scss/*.scss',
					//Excludes
					'!<%= workingPath() %>/_assets/scss/_*.scss'
				],
				tasks: ['compass'],
				options: {
					spawn: false
				}
			}
		}
	});
	//prompt relies on grunt.servers, so it has to come seperate
	grunt.config('prompt', {
		serverPrompt: {
			options: {
				questions: [{
					config: 'servers',
					type: 'checkbox',
					message: 'Choose the server(s) to work with:',
					default: '-- no servers connected --',
					choices: grunt.config('servers').map(function (server) { return {name: server}; }),
					when: function () {
						return grunt.config('servers').length > 1;
					}
				}]
			}
		}
	});

	//Turn off the "Running 'taskname' task" headers
	//grunt.log.header = function () {};

	// events
	grunt.event.on('watch', function (action, filepath) {
		var sass = {};
		sass[filepath.replace(/scss/g, 'css')] = filepath;

		grunt.config('jshint.single.src', filepath);
		grunt.config('sass.single.files', sass);
	});

	/* grunt tasks */
	grunt.registerTask('review', ['jshint:all']);

	grunt.registerTask('debug', function () {
		//grunt.log.write(JSON.stringify(grunt.file.expand(grunt.config('workingPath')() + '/**/*.js')));
		//grunt.log.write(grunt.template.process('<%= workingPath() %>'));
	});

	grunt.registerTask('default', ['compass:compress', 'uglify:compress']);

	/*Select server after setup*/
	grunt.task.run("prompt:serverPrompt");
};