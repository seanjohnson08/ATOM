module.exports = function(grunt) {
    'use-strict';

    // load all grunt-task plugins
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        pkg: grunt.file.readJSON('package.json')
    });

    // events
    grunt.event.on('watch', function(action, filepath) {
        var sass = {};
        grunt.watch = {file: filepath};
        //clear console
        console.log('\033[2J\033[;H');
    });

    /* grunt tasks */
    grunt.registerTask('review', ['jshint:all']);

    grunt.registerTask('listen', function() {
        grunt.config('compass.includes.options.watch', true);
        grunt.task.run('concurrent');
    });

    grunt.registerTask('default', ['compass:includes', 'uglify:compress', 'string-replace:reddot']);

    /*Select server after setup*/

    var servers = grunt.file.expand({cwd: '/Volumes'}, '*.com');

    if (servers.length > 1) {
        grunt.task.run('prompt:serverPrompt');
    } else if (servers.length === 0) {
        grunt.fail.fatal('No connected servers to work with. Please connect to the servers and try again.');
    }
};
