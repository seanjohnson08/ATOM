module.exports = function(grunt) {
    var servers = grunt.file.expand({cwd: '/Volumes'}, '*.com');

    return {
        serverPrompt: {
            options: {
                gruntLogHeader: false,
                questions: [{
                    config: 'servers',
                    type: 'list',
                    message: 'Choose the server(s) to work with:',
                    default: '-- no servers connected --',
                    choices: servers.map(function(server) {
                        return {name: server};
                    }),
                    when: function() {
                        return servers.length > 1;
                    }
                }]
            }
        }
    }
};
