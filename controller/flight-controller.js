'use strict';

const fs = require('fs');
const DATA_URL = `${__dirname}/../model/flights.csv.json`;

module.exports = exports = {};

exports.fetchFlights = function(req) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${DATA_URL}`, 'utf8', (err, data) => {
      if(err) {
        return reject(err);
      }

      let allFlights = JSON.parse(data);
      let searchResults = [];

      for(let i = 0; i < allFlights.length; i++) {
        if(allFlights[i].From === req.params.from && allFlights[i].To === req.params.to) {
          searchResults.push(allFlights[i]);
        }
      }

      if(searchResults.length === 0) return reject(err);
      return resolve(searchResults);

    });
  });
};
