const express = require('express');
const app = express();
const cors = require('cors');
const setupDb = require('./utils/database');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const tweetsroutes = require('./routes/tweets');
const userRoutes = require('./routes/user');


setupDb();

app.use(cors());
app.use(bodyParser.json());



app.use('/', authRoutes);
app.use('/tweets',tweetsroutes);
app.use('/user',userRoutes);

app.listen(3000);