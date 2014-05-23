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

    css: {
        files: [
            '<%= workingPath %>/includes/CSS/default.css',
        ]
    }
};
