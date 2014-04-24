module.exports = {
    options: {
        livereload: true,
        spawn: false,
        nospawn: true
    },

    scripts: {
        files: [ '<%= jshint.all.src %>'],
        tasks: [
            'jshint:watch',
            'jscs:watch',
            'uglify:compress'
        ]
    },

    sass_assets: {
        files: [
            '<%= workingPath.paths() %>/_assets/scss/*.scss',
        ],
        tasks: ['compass:assets']
    },
    sass_includes: {
        files: [
            '<%= workingPath.paths() %>/includes/CSS/sass/*.scss',
            '<%= workingPath.paths() %>/includes/CSS/sass/**/*.scss'
        ],
        tasks: ['compass:includes', 'string-replace:reddot']
    }
};
