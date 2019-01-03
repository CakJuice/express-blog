import Sequelize from 'sequelize';
import db from '../db';
import argon2 from 'argon2';
import 'dotenv/config';

const User = db.define('cj_user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING(64),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

User.hashPassword = function(password) {
  argon2.hash(password, process.env.SECRET).then(hash => {
    this.password = hash;
  });
}

export default User;
