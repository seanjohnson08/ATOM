module.exports = {
    compress: {
        files: [
            {
                src: [
                    '<%= workingPath.paths() %>/includes/JS/jquery.js',
                    '<%= workingPath.paths() %>/includes/JS/lib/jquery.ba-postmessage.min.js',
                    '<%= workingPath.paths() %>/includes/JS/main02.js',
                    '<%= workingPath.paths() %>/includes/JS/lib/deux/*.js'
                ],
                dest: '<%= workingPath.paths() %>/includes/JS/common.js'
            }
        ],
        options: {
            mangle: true,
            sourceMap: true,
            sourceMapIncludeSources: true,
            sourceMapName: '<%= workingPath.paths() %>/includes/JS/common.map.js'
        }
    }
};
