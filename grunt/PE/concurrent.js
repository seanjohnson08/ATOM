module.exports = {
    run: {
        tasks: [
            {
                grunt: true, args:['watch', '--workingPath=<%= workingPath %>'],
            }
        ],
        options: {
            stream: true
        }
    }
};
