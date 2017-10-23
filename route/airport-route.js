'use strict';

const airportController = require('../controller/airport-controller');

module.exports = function(router) {
  router.get('/airports', (req, res) => {
    airportController.fetchAirports(req)
      .then(data => {
        return res.json(data);
      })
      .catch(err => {
        return res.status(404).json(err);
      });
  });
  return (router);
};
