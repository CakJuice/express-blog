import { createRenderer } from 'vue-server-renderer';
import { readFileSync } from 'fs';
import path from 'path';

export default class Controller {
  constructor(layoutPath) {
    this.layoutPath = layoutPath || path.join(__dirname, '..', 'views/layout/main_layout.html');
  }

  static create(req, res) {
    // using this for check request
    console.log("Parent class called!");
  }

  renderTemplate(app, context, res) {
    const renderer = createRenderer({
      template: readFileSync(this.layoutPath, 'utf-8'),
    });

    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error');
        console.log(err);
        return;
      }

      res.end(html);
    });
  }
}
