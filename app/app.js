const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const router = require('./router');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

nunjucks.configure('app/views', {
  autoescape: true,
  express: app,
});

app.use(router);

module.exports = app;
