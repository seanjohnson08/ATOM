module.exports = {
    run: {
        tasks: [
            {
                grunt: true, args:['watch', '--workingPath=<%= workingPath %>'],
            },
            {
                grunt: true, args:['compass:includes-watch', '--workingPath=<%= workingPath %>'],
            }
        ],
        options: {
            stream: true
        }
    }
};
