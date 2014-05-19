module.exports = function(grunt, options) {
    grunt.registerTask('default', [
        'compass:includes',
        'uglify:compress'
    ]);

    grunt.registerTask('prod', [
        'compass:includes',
        'uglify:compress-prod',
        'string-replace:reddot'
    ]);
    
    grunt.registerTask('listen', function() {
        grunt.task.run('parallel');
    });
};
