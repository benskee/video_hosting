const fs = require('fs')
const path = require("path");
const _ = require('lodash');

const treeDict = {}
const root = path.join(__dirname, './theSavedFiles/')


const copyFile = (fileName, s) => {
  var data = fs.readFileSync(fileName, {encoding:"utf8"})
  var json = JSON.stringify(data)
  var currentPath = fileName.replace(root + s + '\\', '')
  var CP = currentPath.split('.')[0]
  var fileType = currentPath.split('.')[1]
  var name = CP.split('\\').pop() + '.' + fileType
  var op = CP.replace(root + s + '\\', '').split('\\')
  var objectPath = op.join('.')

  if(!_.get(treeDict, objectPath)) {
    _.set(treeDict, objectPath, {
      folder: false,
      fileType: fileType,
      objectPath: objectPath,
      start: s,
      lastUpdated: s,
      name: name,
      stamps: {
        [s]: json
      }
    })
  } else {
    var lastUpdated = _.get(treeDict, objectPath + '.lastUpdated')
    if(_.get(treeDict, objectPath + '.stamps.' + lastUpdated) != json) {
      _.set(treeDict, objectPath + '.stamps.' + s, json)
      _.set(treeDict, objectPath + '.lastUpdated', s)
    }
  }
};

const walkDir = (dir, s) => {
    var files = fs.readdirSync(dir)
      for(var i=0;i<files.length;i++){
          var currentPath = `${dir}\\${files[i]}`
          var objectPath = currentPath.replace(root + s + '\\', '').split('\\')
          if(fs.statSync(currentPath).isDirectory() === true) {
            if(!_.get(treeDict, objectPath)) {
              _.set(treeDict, objectPath, {
                folder: true,
                start: s
              })
            }
              walkDir(currentPath, s);
            } else {
                copyFile(currentPath, s)
            }
      };
}

var files = fs.readdirSync(root)

for (s in files) {
    walkDir((root + s), s)
}

var stringTree = JSON.stringify(treeDict)
fs.writeFileSync('testFile.json', stringTree)
console.log('file saved')