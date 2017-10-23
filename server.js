'use strict';

const express = require('express');
const cors = require('cors');
const router = express.Router();

const PORT = process.env.PORT || 3000;
const createDataFiles = require('./lib/create-data-files');
const airportRoutes = require('./route/airport-route');
const flightRoutes = require('./route/flight-route');
const assetsDir = './assets';
const app = module.exports = express();

createDataFiles(assetsDir); //reads csv files and writes json file to data dir

app.use(cors());
app.use('/api', airportRoutes(router));
app.use('/api', flightRoutes(router));
app.listen(PORT, () => console.log(`Server up on ${PORT}`));

app.get('/', (req,res) => {
  const message = 'Welcome to the Flights Finder API';
  res.send(message);
});
