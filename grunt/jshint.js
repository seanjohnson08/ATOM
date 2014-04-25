module.exports = {
    options: {
        reporter: require('jshint-stylish'),
        force: true
    },

    all: {
        src: [
            'Gruntfile.js',
            '<%= workingPath.paths() %>/includes/JS/lib/deux/*.js',
            '<%= workingPath.paths() %>/includes/JS/main.js'

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
