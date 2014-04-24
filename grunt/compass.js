module.exports = {
    // assets: {
    //     options: {
    //         outputStyle: 'compressed',
    //         sassDir: '<%= workingPath.paths() %>/_assets/scss/',
    //         cssDir: '<%= workingPath.paths() %>/_assets/css/'
    //     }
    // },
    includes: {
        options: {
            sourcemap: true,
            outputStyle: 'compressed',
            sassDir: '<%= workingPath.paths() %>/includes/CSS/sass/',
            cssDir: '<%= workingPath.paths() %>/includes/CSS/',
        }
    }
};
