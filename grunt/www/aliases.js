module.exports = function(grunt, options) {
    grunt.registerTask('default', [
        'compass:includes',
        'uglify:compress',
        'string-replace:reddot'
    ]);

    grunt.registerTask('listen', function() {
        grunt.config('compass.includes.options.watch', true);
        grunt.task.run('parallel');
    });
};
