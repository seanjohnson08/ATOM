module.exports = function(grunt) {
    var servers = grunt.file.expand({cwd: '/Volumes'}, '*.com');

    return {
        serverPrompt: {
            options: {
                gruntLogHeader: false,
                questions: [{
                    config: 'workingPath',
                    type: 'list',
                    message: 'Choose the server to work with:',
                    default: '-- no servers connected --',
                    choices: servers.map(function(server_name) {
                        return {name: '/Volumes/' + server_name + '/'};
                    }),
                    when: function() {
                        return servers.length > 1;
                    }
                }]
            }
        }
    };
};
