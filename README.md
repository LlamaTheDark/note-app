# note-app

## General Overview
It's just a web app to save and edit files. Features include:
* File tagging (adding multiple tags to files, deleting them from files)
* Searching by keyword and/or tag
* Rendering plaintext files as html or markdown 
* Deleting files
* Creating new files
* Saving changes to files (occurs automatically)

*note: because I have no server-side code or database, any changes you make will be reset upon refreshing the content of the site. There are, however, 8 mock notes to represent the functionality. Feel free to create your own as well.*

## Mock Data
I just used my own notes from classes as example files. I used [onlinetexttools](https://onlinetexttools.com/json-stringify-text) to convert them into strings fitted for JSON.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Markdown Rendering
I used [markedjs](https://github.com/markedjs/marked) to help render markdown from notes.

