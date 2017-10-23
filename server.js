'use strict';

const express = require('express');
const router = express.Router();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = module.exports = express();


app.listen(PORT, () => console.log(`Server up on ${PORT}`));
