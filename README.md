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
3. If you don't already have it, install the latest alpha version of compass. `gem install compass --pre`

###LiveReload (optional)
1. Install the extension [here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

###Setting up workspaces (optional, but highly recommended)
1. Open Developer tools
2. Cog/Workspace/Add folder - Add the "includes" directory from your server. Click "Allow".
3. Go to the Sources tab in inspector, right click on any JS/CSS file and click "Map to File System Resource"
4. Press enter, the entire includes directory should now be mapped.

##Using the tool
1. Run `grunt listen`.
2. If multiple servers are connected, you will be prompted to select the servers you are working with.
3. Start making changes. Any errors will appear in console for you to correct.


###Other commands
1. `grunt` - Runs task on the entire site. All SASS files are compiled into where they need to go, JS files are concatenated and minified.
2. `grunt review` - Finds JS errors across entire site. Not recommended to use this until we get things cleaned up a bit more, or I change this to only look at the files you have changed.


Please let me know if you find any issues, concerns, or suggestions.
