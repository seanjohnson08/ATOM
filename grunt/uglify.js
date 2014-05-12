module.exports = function(grunt, options){
    return {

        www: {
            'compress': {
                files: [
                    {
                        src: [
                            //Order is very important here!
                            '<%= workingPath.paths() %>/includes/JS/lib/jquery.js',
                            '<%= workingPath.paths() %>/includes/JS/lib/jquery-migrate-1.2.1.js',
                            '<%= workingPath.paths() %>/includes/JS/lib/jquery.ba-postmessage.min.js',
                            '<%= workingPath.paths() %>/includes/JS/main.js',
                            '<%= workingPath.paths() %>/includes/JS/lib/*.js',
                            '<%= workingPath.paths() %>/includes/JS/lib/deux/*.js',
                            //exclude
                            '!<%= workingPath.paths() %>/includes/JS/lib/jwplayer.html5.js'
                        ],
                        dest: '<%= workingPath.paths() %>/includes/JS/common.js'
                    }
                ],
                options: {
                    mangle: {
                        except: ['jQuery']
                    },
                    sourceMap: true,
                    // sourceMapIncludeSources: true,
                    sourceMapName: '<%= workingPath.paths() %>/includes/JS/common.map.js'
                }
            },
        },


        PE: {
            'compress': {
                files: [
                    {
                        src: '<%= workingPath.paths() %>/assets/www/js/non-minified/pe-jquery.js',
                        dest: '<%= workingPath.paths() %>/assets/www/js/pe-jquery.js'
                    }
                ],
                options: {
                    mangle: {
                        except: ['jQuery']
                    },
                    sourceMap: true
                }
            }
        }

    }[grunt.server];
};
