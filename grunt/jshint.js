module.exports = {
    options: {
        reporter: require('jshint-stylish'),
        force: true
    },

    all: {
        src: [
            'Gruntfile.js',
            '<%= workingPath.paths() %>/*.js',
            '<%= workingPath.paths() %>/includes/*.js',
            '<%= workingPath.paths() %>/includes/**/*.js',
            '<%= workingPath.paths() %>/_assets/apps/**/js/*.js',
            '<%= workingPath.paths() %>/_assets/js/*.js',
            '<%= workingPath.paths() %>/_assets/js/**/*.js',

            //PE
            '<%= workingPath.paths() %>/assets/www/js/*.js',
            '<%= workingPath.paths() %>/assets/www/js/**/*.js',

            //Excludes
            '!<%= workingPath.paths() %>/includes/JS/common.js',
            '!<%= workingPath.paths() %>/_assets/js/libs/*.js',
            '!<%= workingPath.paths() %>/**/*.min.js'

        ],
        options: {

        }
    },
    single: {
        src: 'Gruntfile.js',
        options: {

        }
    }
};
