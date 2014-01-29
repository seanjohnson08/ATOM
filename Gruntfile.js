/*
 * This is an WWW public site for Duke Energy Gruntfile.
 *
 * THIS BUILD FILE WILL NOT WORK. It is referencing paths that probably
 * do not exist on your machine. Just use it as a guide.
 *
 */

module.exports = function(grunt) {

  // By default, Grunt doesn't load all your tasks,
  // if "load-grunt-tasks" wasn't required you would have to
  // individually add every tasks from your Gruntfile which
  // will suck when we have alot
  require('load-grunt-tasks')(grunt);

  // Inside of the initConfig {object} is where you initiate
  // each tasks and define it's options. I like to look at it
  // as a huge Jquery Plugin if that helps any
  grunt.initConfig({

    // Watches files in the files {array} | It will then run any
    // tasks in the array below
    watch: {
      scripts: {
        files: ['Gruntfile.js', '../includes/JS/main.js'],
        tasks: ['jshint', 'uglify', 'csslint', 'cssmin']
       }
    },

    // This is JSHint, a tool that helps to detect errors and potential
    // problems in your JavaScript code.
    jshint: {
      options: {
        force: true
      },

      // Logs errors with pages in the terminal
      log: {
        options: {
          reporter: require('jshint-stylish')
        },
        src: ['Gruntfile.js', '../includes/JS/lib']
      },

      // Logs errors with pages in the jshint/logs
      logFile: {
        options: {
          reporter: 'jslint',
          reporterOutput: 'logs/jshint/log-<%= grunt.template.today("yyyy-mm-dd") %>.xml'
        },
        src: ['Gruntfile.js', '../includes/JS/lib']
      }
    },

    // This is Uglify, a tool that helps to minify
    // our javascript files
    uglify: {

      // Production
      compress: {
        files: {
          '../includes/JS/common.js': [
            '../includes/js/jquery.js',
            '../includes/js/jquery.tools.js',
            '../includes/js/jquery.ba-postmessage.min.js',
            '../includes/JS/main.js',
            '../includes/JS/lib/deux/*.js'
          ]
        },
        options: {
          mangle: false
        }

      },

      // Development
      uncompress: {
        files: {
          '../includes/JS/common-beautify.js': [
            '../includes/js/jquery.js',
            '../includes/js/jquery.tools.js',
            '../includes/js/jquery.ba-postmessage.min.js',
            '../includes/JS/main.js',
            '../includes/JS/lib/deux/*.js'
          ]
        },
        options: {
          mangle: false,
          beautify: true // this value makes it uncompressed
        }
      }
    },


    // This is CSSLint, a tool that helps to detect errors and potential
    // problems in your JavaScript code.
    csslint: {
      options: {
        force: true,
        import: false
      },
      lax: {
        src: ['../includes/CSS/deux/*.css']
      }
    },

    // This is cssmin, a tool that helps to minify
    // our css files
    cssmin: {
      default: {
        files: {
          '../includes/CSS/default.css': [
            '../includes/CSS/deux/reset.css',
            '../includes/CSS/deux/*.css'
          ]
        }
      }
    },

    // Replaces reddot images with the proper format to be
    // added to the templates
    'string-replace': {
      single_file: {
        files: {
          '../includes/CSS/default.reddot.css': '../includes/CSS/default.css'
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

};