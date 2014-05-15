module.exports = function(grunt, options) {
    grunt.registerTask("determineserver", function() {

        try {
            serverJSON = grunt.file.readJSON(grunt.config('workingPath') + '/server.json');
            console.log("You are working with: " + serverJSON.server);

            //load config from server folder
            grunt.file.expand('./grunt/' + serverJSON.server + '/*.js').map(function(file){
                var name = file.substr(8, file.length-11),
                    cfg = require('./' + name + '.js');

                if (typeof cfg == "function") {
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
