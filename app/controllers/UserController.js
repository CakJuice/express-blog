import Controller from './Controller';
import Vue from 'vue';
import { readFileSync } from 'fs';
import path from 'path';

export default class UserController extends Controller {
  constructor(templateName) {
    super();
    this.templatePath = path.join(__dirname, '..', 'views/user', templateName);
    this.context = {
      title: "User",
      meta_keywords: 'user',
      meta_description: 'user',
    };
  }

  static index(req, res) {
    res.render('user/index.html');
  }

  static create(req, res) {
    super.create(req, res);
    const controller = new UserController('create.html');

    controller.context = {
      title: "Register New User",
      meta_keywords: "register,user,signup",
      meta_description: "Register new user for this blog site",
    };

    const app = new Vue({
      data: {
        url: req.url,
        someValue: 'Blablabla',
      },
      template: readFileSync(controller.templatePath, 'utf-8').toString(),
    });

    controller.renderTemplate(app, controller.context, res);
  }

  static update(req, res) {
    res.send("User Update")
  }
}
