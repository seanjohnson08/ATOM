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
            //exclusions
            '!<%= workingPath.paths() %>/includes/JS/*.min.js',
            '!<%= workingPath.paths() %>/includes/JS/**/*.min.js',
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
