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

		compass: {
			assets: {
				options: {
					outputStyle: 'compressed',
					sassDir: '<%= workingPath() %>/_assets/scss/',
					cssDir: '<%= workingPath() %>/_assets/css/'
				}
			},
			includes: {
				options: {
					outputStyle: 'compressed',
					sassDir: '<%= workingPath() %>/includes/SASS/',
					cssDir: '<%= workingPath() %>/includes/CSS/'
				}
			}
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

		uglify: {
			compress: {
				files: [
					{
						src: [
							'<%= workingPath() %>/includes/js/jquery.js',
							'<%= workingPath() %>/includes/js/jquery.tools.js',
							'<%= workingPath() %>/includes/js/jquery.ba-postmessage.min.js',
							'<%= workingPath() %>/includes/js/main.js',
							'<%= workingPath() %>/includes/js/lib/deux/*.js'
						],
						dest: '<%= workingPath() %>/includes/JS/common.js'
					}
				],
				options: {
					mangle: false,
					sourceMap: true
				}
			}
		},

		'string-replace': {
			reddotParsing: {
				files: {
					'<%= workingPath() %>/includes/CSS/default.reddot.css': '<%= workingPath() %>/includes/CSS/default.css'
				},
				options: {
					replacements: [{
						pattern: /url\(["']?.*?([^\/]*\.(jpg|png|gif))["']?\)/g,

						replacement: function (match, filename, extension, offset, string) {
							var replacement;

							// if the format is already correct, don't modify it
							if (/fonts\/flex-slider-icon|^<%.*%>$/.test(match)) return match;

							return '<% ' + filename.replace(/[\-\.]/g, '_') + ' %>';
						}
					}]
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},

			scripts: {
				files: [ '<%= jshint.all.src %>'],
				tasks: ['jshint:single', 'uglify:compress'],
				options: {
					spawn: false
				}
			},
			sass_assets: {
				files: [
					'<%= workingPath() %>/_assets/scss/*.scss',
				],
				tasks: ['compass:assets'],
				options: {
					spawn: false
				}
			},
			sass_includes: {
				files: [
					'<%= workingPath() %>/includes/SASS/*.scss'
				],
				tasks: ['compass:includes'],
				options: {
					spawn: false
				}
			},
		}
	});
	//prompt relies on grunt.servers, so it has to come seperate
	grunt.config('prompt', {
		serverPrompt: {
			options: {
				gruntLogHeader: false,
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

	grunt.registerTask('default', ['compass', 'uglify', 'string-replace']);

	/*Select server after setup*/
	if (grunt.config('servers').length > 1) {
		grunt.task.run("prompt:serverPrompt");
	} else if (grunt.config('servers').length === 0) {
		grunt.fail.fatal("No connected servers to work with. Please connect to the servers and try again.");
	}
};