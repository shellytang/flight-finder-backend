'use strict';

const flightController = require('../controller/flight-controller');

module.exports = function(router) {

  router.get('/flights/:from/:to', function(req, res) {
    flightController.fetchFlights(req)
      .then(data => {
        console.log('params: ', req.params);
        return res.json(data);
      })
      .catch(err => {
        return res.status(404).json(err);
      });
  });
  return (router);
};
