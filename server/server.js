const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
require('./config/db');

const bannerRoutes = require('./routes/bannerRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', bannerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
