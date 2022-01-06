const fs = require('fs');
// const path = require("path");
const _ = require('lodash');

const projectDict = {};
const root = '../video_tutorial/React_Boilerplate'
const skipFolders = /.*dicts|uploads|savedFiles|node_modules|config|public|\.git/
const skipFiles = /.*setupTests|reportWebVitals|README|todo|(package-lock\.json)|gitignore/


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
    console.log('dir', dir)
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

const saveTime = setInterval(saver, 5000)
