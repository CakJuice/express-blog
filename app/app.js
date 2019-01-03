const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./router');

const app = express();

nunjucks.configure('app/views', {
  autoescape: true,
  express: app,
});

app.use(router);

module.exports = app;
