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

//Compress-prod configuration
//Create a copy of 'compress' but just change a few options
module.exports['compress-prod'] = JSON.parse(JSON.stringify(module.exports['compress']));
module.exports['compress-prod'].options.compress={drop_console:true};
