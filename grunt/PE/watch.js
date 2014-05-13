module.exports = {
    scripts: {
        files: ['<%= workingPath %>/assets/www/js/non-minified/pe-jquery.js'],
        tasks: ['uglify:compress']
    }
};
