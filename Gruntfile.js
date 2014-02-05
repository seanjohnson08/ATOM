var fs = require('fs'),
  _ = require('underscore'),

  // function userServer
  userServer = function() {

    // check for directories in volumes
    var dirs = fs.readdirSync('/Volumes'), servers = [], user = '';
    
    // if server have ".com" add servers array
    _.each(dirs, function(dir, index) {
      if( dir.indexOf('.com') > -1 ) servers.push(dir);
    });

    // if servers array is larger then 1
    if( servers.length > 1 ) {
      user += '{';
        _.each(servers, function(server, index) { user += server + ', '; });
      user += '}';
    } else if ( servers.length == 1 ) {
      user = servers[0];
    }

    // return user
    return user;
  }

// this page should export a function
module.exports = function(grunt) {

  // loading all package.json files
  require('load-grunt-tasks')(grunt);

  // Creating initial grunt config
  grunt.initConfig({

    // Run userServer and assign to
    // user property
    user: userServer(),

    // Watch config
    watch: {

      // Watching scripts
      scripts: {
        files: [
          'Gruntfile.js',
          '/Volumes/<%= user %>/*.js',
          '/Volumes/<%= user %>/includes/*.js',
          '/Volumes/<%= user %>/includes/**/*.js',
          '/Volumes/<%= user %>/_assets/apps/**/js/*.js',
          '/Volumes/<%= user %>/_assets/js/*.js',
          '/Volumes/<%= user %>/_assets/js/**/*.js'
        ],
        tasks: ['jshint'],
        options: {
          nospawn: true,
        }
      },

      // Watching sass files
      sass: {
        files: [ '/Volumes/<%= user %>/includes/SASS/*.scss' ],
        tasks: ['compass']
      }

    },

    // Jshint init configuration
    jshint: {
      options: {
        force: true
      },
      log: {
        options: {
          reporter: require('jshint-stylish')
        }
      }
    },

    // Uglify javascript into common.js
    uglify: {
      compress: {
        files: {
          '/Volumes/<%= user %>/includes/JS/common.js': [
            '/Volumes/<%= user %>/includes/js/jquery.js',
            '/Volumes/<%= user %>/includes/js/jquery.tools.js',
            '/Volumes/<%= user %>/includes/js/jquery.ba-postmessage.min.js',
            '/Volumes/<%= user %>/includes/JS/main.js',
            '/Volumes/<%= user %>/includes/JS/lib/deux/*.js'
          ]
        },
        options: {
          mangle: false
        }
      },
      uncompress: {
        files: {
          '/Volumes/<%= user %>/includes/JS/common-beautify.js': [
            '/Volumes/<%= user %>/includes/js/jquery.js',
            '/Volumes/<%= user %>/includes/js/jquery.tools.js',
            '/Volumes/<%= user %>/includes/js/jquery.ba-postmessage.min.js',
            '/Volumes/<%= user %>/includes/JS/main.js',
            '/Volumes/<%= user %>/includes/JS/lib/deux/*.js'
          ]
        },
        options: {
          mangle: false,
          beautify: true
        }
      }
    },

    // Compass configuration
    compass: {
      compress: {
        options: {
          outputStyle: 'compressed',
          sassDir: '/Volumes/<%= user %>/includes/SASS',
          specify: '/Volumes/<%= user %>/includes/SASS/default.scss',
          cssDir: '/Volumes/<%= user %>/includes/CSS'
        }
      }
    },

    // String replace
    'string-replace': {
      single_file: {
        files: {
          '/Volumes/<%= user %>/includes/CSS/default.reddot.css': '/Volumes/<%= user %>/includes/CSS/default.css'
        },
        options: {
          replacements: [
            {
              pattern: /url\((.*?)\)/g,

              replacement: function(match, p1, offset, string) {

                // create replacement variable
                var replacement;

                // if any of these extensions exist
                if(match.indexOf('.jpg') > -1 || match.indexOf('.png') > -1 || match.indexOf('.gif') > -1) {

                  // return match
                  if(match.indexOf('fonts/flexslider-icon') > -1) return match;
                  if(match.indexOf('<%') > -1 && match.indexOf('%>') > -1) return match;

                  // parse match into format for reddot
                  replacement = match.substring(match.lastIndexOf('/'));
                  replacement = replacement.replace('/', '<%').replace(')', '%>');
                  replacement = replacement.replace(/\-/g,'_');
                  replacement = replacement.replace(/\./g,'_');
                  return replacement;
                }
              }
            }
          ]
        }
      }
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    grunt.config(['jshint', 'log'], {
      options: {
        reporter: require('jshint-stylish')
      },
      src: [filepath]
    });
  });

  grunt.registerTask('review', 'JShint this javascript file', function(filepath) {
    grunt.config(['jshint', 'log'], {
      options: {
        reporter: require('jshint-stylish')
      },
      src: [filepath]
    });
    grunt.task.run('jshint:log');
  });

  grunt.registerTask('compress', 'Use uglify to compress javascript files', function(server) {
    grunt.config('server', server);
    grunt.config(['uglify', 'compress'], {
      files: {
        '/Volumes/<%= server %>/includes/JS/common.js': [
          '/Volumes/<%= server %>/includes/js/jquery.js',
          '/Volumes/<%= server %>/includes/js/jquery.tools.js',
          '/Volumes/<%= server %>/includes/js/jquery.ba-postmessage.min.js',
          '/Volumes/<%= server %>/includes/JS/main.js',
          '/Volumes/<%= server %>/includes/JS/lib/deux/*.js'
        ]
      },
      options: {
        mangle: false
      }
    });
    grunt.config(['uglify', 'uncompress'], {
      files: {
        '/Volumes/<%= server %>/includes/JS/common-beautify.js': [
          '/Volumes/<%= server %>/includes/js/jquery.js',
          '/Volumes/<%= server %>/includes/js/jquery.tools.js',
          '/Volumes/<%= server %>/includes/js/jquery.ba-postmessage.min.js',
          '/Volumes/<%= server %>/includes/JS/main.js',
          '/Volumes/<%= server %>/includes/JS/lib/deux/*.js'
        ]
      },
      options: {
        mangle: false,
        beautify: true
      }
    });
    grunt.task.run('uglify');
  });

};