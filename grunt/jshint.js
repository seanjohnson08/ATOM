module.exports = {
    options: {
        reporter: require('jshint-stylish'),
        force: true
    },

    all: {
        src: [
            'Gruntfile.js',
            '<%= workingPath.paths() %>/includes/JS/*.js',
            '<%= workingPath.paths() %>/includes/JS/**/*.js',
        ],
        options: {

        }
    },
    watch: {
        src: [
            '<%= grunt.watch.file %>'
        ],
        options: {

        }
    }
};
