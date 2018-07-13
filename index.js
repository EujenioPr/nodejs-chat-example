const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes')(app);

app.listen('8080', () => {
    console.log('Server started on port: 8080');
});