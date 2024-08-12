const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const bannerRoutes = require('./routes/bannerRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', bannerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
