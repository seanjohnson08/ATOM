module.exports = {
    'compress': {
        files: [
            {
                src: [
                    //Order is very important here!
                    '<%= workingPath %>/includes/JS/lib/jquery.js',
                    '<%= workingPath %>/includes/JS/lib/jquery-migrate-1.2.1.js',
                    '<%= workingPath %>/includes/JS/lib/jquery.ba-postmessage.min.js',
                    '<%= workingPath %>/includes/JS/main.js',
                    '<%= workingPath %>/includes/JS/lib/*.js',
                    '<%= workingPath %>/includes/JS/lib/deux/*.js',
                    //exclude
                    '!<%= workingPath %>/includes/JS/lib/jwplayer.html5.js'
                ],
                dest: '<%= workingPath %>/includes/JS/common.js'
            }
        ],
        options: {
            mangle: {
                except: ['jQuery']
            },
            sourceMap: true,
            // sourceMapIncludeSources: true,
            sourceMapName: '<%= workingPath %>/includes/JS/common.map.js'
        }
    },
};
