module.exports = function(grunt, options) {
    grunt.registerTask('default', 'uglify:compress');

    grunt.registerTask('listen', 'watch');
};