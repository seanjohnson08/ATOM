module.exports = function(grunt, options){
    return {
        www: {
            tasks: ['watch', 'compass:includes'],
            options: {
                logConcurrentOutput: true
            }
        },
        PE: {
            tasks: ['watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    }[grunt.server];
};
