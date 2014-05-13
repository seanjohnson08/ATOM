module.exports = {
    run: {
        tasks: [
            {
                grunt: true, args:['watch', '--workingPath=<%= workingPath %>'],
            },
            {
                grunt: true, args:['compass:includes', '--workingPath=<%= workingPath %>'],
            }
        ],
        options: {
            stream: true
        }
    }
};
