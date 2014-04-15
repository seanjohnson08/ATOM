module.exports = {
    compress: {
        files: [
            {
                src: [
                    '<%= workingPath.paths() %>/includes/JS/jquery.js',
                    '<%= workingPath.paths() %>/includes/JS/jquery.tools.js',
                    '<%= workingPath.paths() %>/includes/JS/jquery.ba-postmessage.min.js',
                    '<%= workingPath.paths() %>/includes/JS/main02.js',
                    '<%= workingPath.paths() %>/includes/JS/lib/deux/*.js'
                ],
                dest: '<%= workingPath.paths() %>/includes/JS/common.js'
            }
        ],
        options: {
            sourceMap: true,
            sourceMapIncludeSources: true,
            sourceMapName: '<%= workingPath.paths() %>/includes/JS/common.map.js'
        }
    }
};
