const express = require('express');
const path = require('path');
const connect = require('./database/database');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

connect();

app.listen(9000);
