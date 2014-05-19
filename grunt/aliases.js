module.exports = function(grunt, options) {

    //These will create an infinite loop if not overwritten by
    //something in the server/aliases.js file.
    //However, these lines are necessary because the tasks need to be defined at runtime, before
    //the 'determineserver' task is run.
    grunt.registerTask('default', 'default');
    grunt.registerTask('listen', 'listen');
    grunt.registerTask('prod', 'prod');

    grunt.registerTask('determineserver', function() {

        try {
            serverJSON = grunt.file.readJSON(grunt.config('workingPath') + '/server.json');

            var dir = './grunt/' + serverJSON.server;

            if (!grunt.file.exists(dir)) {
                return grunt.fail.fatal("Invalid server configuration in server.json");
            }

            console.log('You are working with: ' + serverJSON.server);

            //load config from server folder
            grunt.file.expand(dir + '/*.js').map(function(file){
                var name = file.substr(8, file.length-11),
                    cfg = require('./' + name + '.js');

                if (typeof cfg == 'function') {
                    cfg = cfg(grunt, options);
                }
                grunt.config(name.substr(serverJSON.server.length + 1), cfg);
            });
        } catch(e) {
            grunt.fail.fatal('There was an error reading server.json: ' + e);
        }
    });

    //Clear screen whenever a new watch event is fired
    grunt.event.on('watch', function(action, filepath) {
        var sass = {};
        grunt.watch = {file: filepath};
        //clear console
        console.log('\033[2J\033[;H');
    });
};
