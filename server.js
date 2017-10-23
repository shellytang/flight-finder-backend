'use strict';

const express = require('express');
const router = express.Router();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = module.exports = express();
const createDataFiles = require('./lib/create-data-files');
const assetsDir = './assets';

createDataFiles(assetsDir); //reads csv files and writes json file to data dir

app.use(cors());
app.listen(PORT, () => console.log(`Server up on ${PORT}`));
