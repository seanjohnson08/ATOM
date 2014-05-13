module.exports = {
    options: {
        reporter: require('jshint-stylish'),
        force: true
    },

    all: {
        src: [
            'Gruntfile.js',
            '<%= workingPath %>/includes/JS/*.js',
            '<%= workingPath %>/includes/JS/**/*.js',
            //exclusions
            '!<%= workingPath %>/includes/JS/*.min.js',
            '!<%= workingPath %>/includes/JS/**/*.min.js',
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
