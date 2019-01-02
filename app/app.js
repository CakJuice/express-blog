import express from 'express';
import router from './router';
import nunjucks from 'nunjucks';

const app = express();

nunjucks.configure('app/views', {
  autoescape: true,
  express: app,
});

app.use(router);

export default app;
