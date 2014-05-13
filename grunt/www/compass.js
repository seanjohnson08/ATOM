module.exports = {
    clean: {
        options: {
            clean: true,
            outputStyle: 'compressed',
            sassDir: '<%= workingPath %>/includes/CSS/sass/',
            cssDir: '<%= workingPath %>/includes/CSS/'
        }
    },
    includes: {
        options: {
            sourcemap: true,
            outputStyle: 'compressed',
            sassDir: '<%= workingPath %>/includes/CSS/sass/',
            cssDir: '<%= workingPath %>/includes/CSS/',
        }
    }
};
