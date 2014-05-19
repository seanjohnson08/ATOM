var extend = require("util")._extend;

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
module.exports['compress-prod'] = extend({}, module.exports.compress);
module.exports['compress-prod'].options.compress={drop_console:true};
