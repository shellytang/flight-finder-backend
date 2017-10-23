'use strict';

const fs = require('fs');
const csv = require('csvtojson'); // npm module that converts csv to json
const dir = './model';

module.exports = function loadAssetsFolder(path) {
  fs.readdir(path, (error, files) => {

    console.log('path', path);

    if(error) {
      console.log(error);
    }
    files.forEach(file => {
      getDataFromCsv(path, file);
    });

  });
};

function getDataFromCsv(path, file) {
  let data = [];
  let filePath = `${path}/${file}`;

  csv().fromFile(filePath)
    .on('json', jsonObj => {
      data.push((jsonObj)); //push each row into array
      console.log('data', data);
    })
    .on('done', error => {
      if(error) {
        console.log(error);
      }

      fs.writeFile(`${dir}/${file}.json`, data, 'utf8', (error) => {
        if(error) {
          console.log(error);
        }
      });
    });
}
