const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys')

require('./services/passport')

require('./routes/authRoute')(app);

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;

app.listen(PORT)