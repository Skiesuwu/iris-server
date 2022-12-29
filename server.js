const express = require('express');
const Logger = require('./logging/Logger');

const register = require('./api/register');
const login = require('./api/login');
const cors = require('cors');

const app = express();
const path = require('path');

require('./Database/database');

app.use(cors());

app.use(register);
app.use(login);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(7070, () => {
  Logger.INFO('Now Listening on Port 7070');
});
