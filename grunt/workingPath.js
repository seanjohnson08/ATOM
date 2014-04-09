module.exports = function(grunt) {
    return {
        paths: function() {
            var servers = grunt.file.expand({cwd: '/Volumes'}, '*.com');
            return '/Volumes/' + (
                servers.length > 1 ?
                    '{' + servers.join(', ') + '}' :
                    servers[0]
            );
        }
    }
}
