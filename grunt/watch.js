module.exports = {
    options: {
        // livereload: true,
        spawn: false,
        nospawn: true
    },

    scripts: {
        files: [ '<%= jshint.all.src %>'],
        tasks: [
            // 'newer:jshint:all',
            //'uglify:compress'
            'concurrent'
        //    'newer:jscs:all', 
        //    'concurrent'
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
            '<%= workingPath.paths() %>/includes/SASS/*.scss'
        ],
        tasks: ['compass:includes']
    }
};
