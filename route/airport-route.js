'use strict';

const airportController = require('../controller/airport-controller');

module.exports = function(router) {
  router.get('/aiports', (req, res) => {
    airportController.fetchAirports(req)
      .then(data => {
        console.log('THE DATA: ', data);
        return res.json(data);

      })
      .catch(err => {
        return res.state(404).json(err);
      });
  });
};
