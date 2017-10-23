'use strict';

const fs = require('fs');
const DATA_URL = `${__dirname}/../model/airports.csv.json`;

module.exports = exports = {};

exports.fetchAirports = function() {
  return new Promise((resolve, reject) => {
    fs.readFile(`${DATA_URL}`, 'utf8', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(JSON.parse(data));
    });
  });
};
