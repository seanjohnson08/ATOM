module.exports = {
    compress: {
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
    }
};
