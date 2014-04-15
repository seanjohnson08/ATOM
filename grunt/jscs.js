module.exports = {
    options: {
        force: true,

        requireSpaceAfterKeywords: 'if else for while do switch return try catch'.split(' '),

        requireSpacesInFunctionExpression: {'beforeOpeningCurlyBrace': true},
        disallowSpacesInFunctionExpression: {'beforeOpeningRoundBrace': true},

        // requireSpacesInAnonymousFunctionExpression: {'beforeOpeningCurlyBrace': true},
        // disallowSpacesInAnonymousFunctionExpression: {'beforeOpeningRoundBrace': true},

        // requireSpacesInNamedFunctionExpression: {'beforeOpeningCurlyBrace': true},
        // disallowSpacesInNamedFunctionExpression: {'beforeOpeningRoundBrace': true},

        requireMultipleVarDecl: true,
        requireBlocksOnNewline: true,
        disallowEmptyBlocks: true,
        disallowDanglingUnderscores: true,
        requireCommaBeforeLineBreak: true,

        requireOperatorBeforeLineBreak: '? + - / * = == === != !== > >= < <='.split(' '),

        validateIndentation: 4,
        validateQuoteMarks: '\'',

        disallowMixedSpacesAndTabs: true,
        disallowTrailingWhitespace: true,

        //disallowKeywordsOnNewLine: ['else'],
        disallowYodaConditions: true,
        disallowKeywords: ['with'],
        requireParenthesesAroundIIFE: true,

        //spaces around operators
        requireSpaceBeforeBinaryOperators: '+ - / * = == === != !=='.split(' '),
        requireSpaceAfterBinaryOperators: '+ - / * = == === != !=='.split(' '),
        disallowLeftStickedOperators: '? + - / * = == === != !== > >= < <='.split(' '),
        disallowRightStickedOperators: '? / * = == === != !== > >= < <='.split(' '),

        //disallow spaces before unary operators
        disallowSpaceAfterPrefixUnaryOperators: '++ -- + - ~ !'.split(' '),
        disallowSpaceBeforePostfixUnaryOperators: '++ -- + - ~ !'.split(' '),

        disallowMultipleLineStrings: true,
        disallowMultipleLineBreaks: true,

        //should be supported, but aren't in the grunt plugin
        //requireSpaceBeforeBlockStatements: true,
        //disallowTrailingComma: true
    },
    all: {
        src: [
            'Gruntfile.js',
            //PE
            // '<%= workingPath.paths() %>/assets/www/js/*.js',
            // '<%= workingPath.paths() %>/assets/www/js/**/*.js',
            // '<%= workingPath.paths() %>/includes/js/common.js',
            '<%= workingPath.paths() %>/includes/js/main02.js',
            '<%= workingPath.paths() %>/includes/js/lib/deux/*.js',
        ]
    } //,
    // single: {
    //     src: ['<%= jshint.single.src %>']
    // }
};
