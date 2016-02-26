'use strict';

var Car = require('./car.model.js');
var fs = require('fs');
var path = require('path');

function saveCar(entity) {
    return function (entity) {
        entity.saveAsync()
            .spread(entity => {
                return entity;
            })
    };
}

function uploadFile(file, newPath) {
    fs.readFile(file.path, function (err, data) {
        fs.writeFile(newPath, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("File uploaded!");
            }
        });
    });
}

export function uploadCarFunction(req, res) {
    var file = req.files.file;
    var newPath = path.resolve(__dirname + "\\..\\..\\..\\data\\uploads\\" + file.name);
    console.log("Uploading file:" + newPath);
    uploadFile(file, newPath);
    res.header("path", newPath);
}