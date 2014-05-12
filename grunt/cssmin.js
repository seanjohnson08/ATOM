module.exports = function(grunt, options){
    return {
        PE: {
            'compress': {
                files: [
                
                    //Un-comment this when there is actually something to minify.

                    // {
                    //     src: '<%= workingPath.paths() %>/assets/www/js/non-minified/pe-jquery.js',
                    //     dest: '<%= workingPath.paths() %>/assets/www/js/pe-jquery.js'
                    // }
                ],
           }
       },

    }[grunt.server];
};
