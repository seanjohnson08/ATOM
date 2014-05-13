module.exports = function(grunt, options) {
    grunt.registerTask('default', [
        'compass:includes',
        'uglify:compress',
        'string-replace:reddot'
    ]);
    
    grunt.registerTask('listen', function() {
        grunt.task.run('parallel');
    });
};
