module.exports = {
    'compress': {
        files: [
            {
                src: [
                    //Order is very important here!
                    '<%= workingPath %>/includes/JS/lib/jquery.js',
                    '<%= workingPath %>/includes/JS/lib/jquery-migrate-1.2.1.js',
                    '<%= workingPath %>/includes/JS/lib/jquery.ba-postmessage.min.js',
                    '<%= workingPath %>/includes/JS/duke.js',
                    '<%= workingPath %>/includes/JS/duke.*.js',
                    '<%= workingPath %>/includes/JS/lib/*.js',
                    '<%= workingPath %>/includes/JS/lib/deux/*.js'
                ],
                dest: '<%= workingPath %>/includes/JS/common.js'
            }
        ],
        options: {
            mangle: {
                except: ['jQuery']
            },
            sourceMap: true,
            // sourceMapIncludeSources: true,
            sourceMapName: '<%= workingPath %>/includes/JS/common.map.js'
        }
    },
};

//Compress-prod configuration
//Create a copy of 'compress' but just change a few options
module.exports['compress-prod'] = JSON.parse(JSON.stringify(module.exports['compress']));
module.exports['compress-prod'].options.compress={drop_console:true};
