module.exports = {
    reddot: {
        files: {
            '<%= workingPath.paths() %>/includes/CSS/default.reddot.css': '<%= workingPath.paths() %>/includes/CSS/default.css'
        },
        options: {
            replacements: [{
                pattern: /url\(["']?.*?([^\/]*\.(jpg|png|gif))["']?\)/g,

                replacement: function(match, filename, extension, offset, string) {
                    // if the format is already correct, don't modify it
                    if (/fonts\/flex-slider-icon|^<%.*%>$/.test(match)) return match;

                    return 'url(<% ' + filename.replace(/[\-\.]/g, '_') + ' %>)';
                }
            }]
        }
    }
};
