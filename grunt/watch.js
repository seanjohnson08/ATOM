module.exports = {
    options: {
        livereload: 'true',
        spawn: 'false'
    },

    scripts: {
        files: [ '<%= jshint.all.src %>'],
        tasks: ['jshint:single', 'jscs:single', 'uglify:compress']
    },

    sass_assets: {
        files: [
            '<%= workingPath.paths() %>/_assets/scss/*.scss',
        ],
        tasks: ['compass:assets']
    },
    sass_includes: {
        files: [
            '<%= workingPath.paths() %>/includes/SASS/*.scss'
        ],
        tasks: ['compass:includes']
    }
};
