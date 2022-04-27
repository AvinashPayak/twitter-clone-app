const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

app.use(cors());
app.use(bodyParser.json());

app.use('/', authRoutes);

app.listen(3000);