import Controller from './Controller';

export default class UserController extends Controller {
  static index(req, res) {
    res.send("User Index");
  }

  static create(req, res) {
    super.create(req, res);
    res.send("User Create");
  }

  static update(req, res) {
    res.send("User Update")
  }
}
