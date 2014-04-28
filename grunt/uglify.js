module.exports = {
    compress: {
        files: [
            {
                src: [
                    '<%= workingPath.paths() %>/includes/JS/lib/jquery.js',
                    '<%= workingPath.paths() %>/includes/JS/lib/*.js',
                    '<%= workingPath.paths() %>/includes/JS/lib/deux/*.js',
                ],
                dest: '<%= workingPath.paths() %>/includes/JS/common.js'
            }
        ],
        options: {
            mangle: true,
            sourceMap: true,
            // sourceMapIncludeSources: true,
            sourceMapName: '<%= workingPath.paths() %>/includes/JS/common.map.js'
        }
    }
};
