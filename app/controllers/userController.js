const User = require('../models/User');

const userController = {
  index: (req, res) => {
    res.render('user/index.html');
  },
  create: (req, res) => {
    if (req.method == 'POST') {
      User.hashPassword(req.body.password1).then(hash => {
        User.create({
          username: req.body.username,
          email: req.body.email,
          password: hash,
        });
      });
    }

    res.render('user/create.html');
  }
}

module.exports = userController;
