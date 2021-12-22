const fs = require('fs')
const ncp = require('ncp').ncp

const sourceFolder = './'
const skipFolders = /.*dicts|uploads|theSavedFiles|node_modules|config|public|\.git/
const skipFiles = /.*setupTests|reportWebVitals|README|todo|(package-lock\.json)|gitignore/

let options = {filter: (source) => {
        if (fs.lstatSync(source).isDirectory()) {
            // return true;
            return source.match(skipFolders) == null;
        } else {
            return source.match(skipFiles) == null;
        }
    }
}

const fileSaver = () => {
        let l = fs.readdirSync('./theSavedFiles').length
        let destFolder = `./theSavedFiles/${l}`

    ncp(sourceFolder, destFolder, options, function (err) {
        if (err) {
            return console.error(err)
        }
        console.log(l)
    })
}

const saveTime = setInterval( fileSaver, 5000)