function crap() {
    return 'test';
}
var crap = function() {
    return 'test';
};

if (window.a == 5) {
    console.log('test');
}

module.exports = function(grunt) {
    'use-strict';

    // load all grunt-task plugins
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        servers: grunt.file.expand({cwd: '/Volumes'}, '*.com'),
        workingPath: function() {
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
            options: {
                reporter: require('jshint-stylish'),
                force: true
            },

            all: {
                src: [
                    'Gruntfile.js',
                    '<%= workingPath() %>/*.js',
                    '<%= workingPath() %>/includes/*.js',
                    '<%= workingPath() %>/includes/**/*.js',
                    '<%= workingPath() %>/_assets/apps/**/js/*.js',
                    '<%= workingPath() %>/_assets/js/*.js',
                    '<%= workingPath() %>/_assets/js/**/*.js',

                    //Excludes
                    '!<%= workingPath() %>/includes/JS/common.js',
                    '!<%= workingPath() %>/_assets/js/libs/*.js',
                    '!<%= workingPath() %>/**/*.min.js'

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

        jscs: {
            options: {
                force: true,

                requireSpaceAfterKeywords: 'if else for while do switch return try catch'.split(' '),

                requireSpacesInFunctionExpression: {'beforeOpeningCurlyBrace': true},
                disallowSpacesInFunctionExpression: {'beforeOpeningRoundBrace': true},

                // requireSpacesInAnonymousFunctionExpression: {'beforeOpeningCurlyBrace': true},
                // disallowSpacesInAnonymousFunctionExpression: {'beforeOpeningRoundBrace': true},

                // requireSpacesInNamedFunctionExpression: {'beforeOpeningCurlyBrace': true},
                // disallowSpacesInNamedFunctionExpression: {'beforeOpeningRoundBrace': true},

                requireMultipleVarDecl: true,
                requireBlocksOnNewline: true,
                disallowEmptyBlocks: true,
                disallowDanglingUnderscores: true,
                requireCommaBeforeLineBreak: true,

                requireOperatorBeforeLineBreak: '? + - / * = == === != !== > >= < <='.split(' '),

                validateIndentation: 4,
                validateQuoteMarks: '\'',

                disallowMixedSpacesAndTabs: true,
                disallowTrailingWhitespace: true,

                //disallowKeywordsOnNewLine: ['else'],
                disallowYodaConditions: true,
                disallowKeywords: ['with'],
                requireParenthesesAroundIIFE: true,

                //spaces around operators
                requireSpaceBeforeBinaryOperators: '+ - / * = == === != !=='.split(' '),
                requireSpaceAfterBinaryOperators: '+ - / * = == === != !=='.split(' '),
                disallowLeftStickedOperators: '? + - / * = == === != !== > >= < <='.split(' '),
                disallowRightStickedOperators: '? / * = == === != !== > >= < <='.split(' '),

                //disallow spaces before unary operators
                disallowSpaceAfterPrefixUnaryOperators: '++ -- + - ~ !'.split(' '),
                disallowSpaceBeforePostfixUnaryOperators: '++ -- + - ~ !'.split(' '),

                disallowMultipleLineStrings: true,
                disallowMultipleLineBreaks: true,

                //should be supported, but aren't in the grunt plugin
                //requireSpaceBeforeBlockStatements: true,
                //disallowTrailingComma: true
            },
            all: {
                src: ['<%= jshint.all.src %>']
            },
            single: {
                src: ['<%= jshint.single.src %>']
            }
        },

        uglify: {
            compress: {
                files: [
                    {
                        src: [
                            '<%= workingPath() %>/includes/JS/jquery.js',
                            '<%= workingPath() %>/includes/JS/jquery.tools.js',
                            '<%= workingPath() %>/includes/JS/jquery.ba-postmessage.min.js',
                            '<%= workingPath() %>/includes/JS/main.js',
                            '<%= workingPath() %>/includes/JS/lib/deux/*.js'
                        ],
                        dest: '<%= workingPath() %>/includes/JS/common.js'
                    }
                ],
                options: {
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

                        replacement: function(match, filename, extension, offset, string) {
                            // if the format is already correct, don't modify it
                            if (/fonts\/flex-slider-icon|^<%.*%>$/.test(match)) return match;

                            return 'url(<% ' + filename.replace(/[\-\.]/g, '_') + ' %>)';
                        }
                    }]
                }
            }
        },

        watch: {
            options: {
                livereload: true,
                spawn: false
            },

            scripts: {
                files: [ '<%= jshint.all.src %>'],
                tasks: ['jshint:single', 'jscs:single', 'uglify:compress']
            },

            sass_assets: {
                files: [
                    '<%= workingPath() %>/_assets/scss/*.scss',
                ],
                tasks: ['compass:assets']
            },
            sass_includes: {
                files: [
                    '<%= workingPath() %>/includes/SASS/*.scss'
                ],
                tasks: ['compass:includes']
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
                    choices: grunt.config('servers').map(function(server) {
                        return {name: server};
                    }),
                    when: function() {
                        return grunt.config('servers').length > 1;
                    }
                }]
            }
        }
    });

    //Turn off the "Running 'taskname' task" headers
    //grunt.log.header = function() {};

    // events
    grunt.event.on('watch', function(action, filepath) {
        var sass = {};
        sass[filepath.replace(/scss/g, 'css')] = filepath;

        grunt.config('jshint.single.src', filepath);
        grunt.config('jscs.single.src', filepath);
        grunt.config('sass.single.files', sass);
    });

    /* grunt tasks */
    grunt.registerTask('review', ['jshint:all']);

    grunt.registerTask('default', ['compass', 'uglify', 'string-replace']);

    /*Select server after setup*/
    if (grunt.config('servers').length > 1) {
        grunt.task.run('prompt:serverPrompt');
    } else if (grunt.config('servers').length === 0) {
        grunt.fail.fatal('No connected servers to work with. Please connect to the servers and try again.');
    }
};