import Controller from './Controller';
import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';
import { readFileSync } from 'fs';
import path from 'path';

export default class UserController extends Controller {
  static index(req, res) {
    res.send("User Index");
  }

  static create(req, res) {
    super.create(req, res);
    const template = path.join(__dirname, '..', 'views/user/create.html');
    const app = new Vue({
      data: {
        url: req.url,
      },
      template: `<div>The visited URL is: {{ url }}</div>`
    });

    const renderer = createRenderer({
      template: readFileSync(template, 'utf-8'),
    });

    renderer.renderToString(app, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error');
        return;
      }

      res.end(html);
    });
    
    // res.send("User Create");
  }

  static update(req, res) {
    res.send("User Update")
  }
}
