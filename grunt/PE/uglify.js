module.exports = {
    compress: {
        files: [
            {
                src: '<%= workingPath %>/assets/www/js/non-minified/pe-jquery.js',
                dest: '<%= workingPath %>/assets/www/js/pe-jquery.js'
            }
        ],
        options: {
            mangle: {
                except: ['jQuery']
            },
            sourceMap: true
        }
    }
};
