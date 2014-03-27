#ATOM

Duke Energy's Public site workflow. This script will:
1. Compile SASS files, using compass
2. Concatentate JS files as needed
3. Display JS errors, typos, and coding-style issues for you to correct.
4. Automatically refresh your browser whenever a file is changed, if LiveReload is installed and enabled.


##Installation

###The tool
1. Pull down this repo.
2. Run `npm install` in the repo's directory.

###LiveReload (optional)
1. Install the extension [here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

##Using the tool
1. Run `grunt watch`.
2. If multiple servers are connected, you will be prompted to select the servers you are working with.
3. Start making changes. Any errors will appear in console for you to correct.