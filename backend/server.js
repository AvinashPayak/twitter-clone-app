const express = require('express');
const app = express();
const cors = require('cors');
const setupDb = require('./utils/database');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

setupDb();

app.use(cors());
app.use(bodyParser.json());



app.use('/', authRoutes);

app.listen(3000);