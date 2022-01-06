const fs = require('fs');
const _ = require('lodash');

// Relative path to folder to record
const root = './'

// Interval between saves in miliseconds
const interval = 5000

// Regex list of folders to skip
const skipFolders = /.*node_modules|config|public|\.git/

// Regex list of files to skip
const skipFiles = /.*setupTests|projectRecorder|reportWebVitals|README|(package-lock\.json)|gitignore/


const projectDict = {};
var s = 0

const copyFile = fileName => {
    var data = fs.readFileSync(fileName, { encoding: "utf8" });
    var json = JSON.stringify(data);
    var pathSplit = fileName.replace(root + '\\', '').split('.');
    var currentPath = pathSplit[pathSplit.length-2]
    var fileType = pathSplit[pathSplit.length - 1]
    var name = currentPath.split('\\').pop() + '.' + fileType;
    var objectPath = currentPath.split('\\').join('.');

    if (!_.get(projectDict, objectPath)) {
        _.set(projectDict, objectPath, {
            folder: false,
            fileType: fileType,
            objectPath: objectPath,
            start: s,
            lastUpdated: s,
            name: name,
            stamps: {
                [s]: json
            }
        });
    } else {
        var lastUpdated = _.get(projectDict, objectPath + '.lastUpdated');
        if (_.get(projectDict, objectPath + '.stamps.' + lastUpdated) != json) {
            _.set(projectDict, objectPath + '.stamps.' + s, json);
            _.set(projectDict, objectPath + '.lastUpdated', s);
        }
    }
};

const walkDir = dir => {
    var files = fs.readdirSync(dir);
    for (var i = 0; i < files.length; i++) {
        var currentPath = `${dir}\\${files[i]}`;
        var op = currentPath.replace((root + '\\'), '');
        var objectPath = op.split('\\').join('.');
        if (fs.statSync(currentPath).isDirectory() === true) {
            if (currentPath.match(skipFolders) == null) {
                if (!_.get(projectDict, objectPath)) {
                    _.set(projectDict, objectPath, {
                        folder: true,
                        start: s
                    });
                }
                walkDir(currentPath);
            }
        } else {
            if (currentPath.match(skipFiles) == null) {
                copyFile(currentPath);
            }
        }
        };
};


const saver = () => {
    walkDir(root);
    var projectString = JSON.stringify(projectDict);
    fs.writeFileSync('projectFile.json', projectString);
    console.log('file saved', s);
    s++
}

const saveTime = setInterval(saver, interval)
