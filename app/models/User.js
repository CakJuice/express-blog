const Sequelize = require('sequelize');
const argon2 = require('argon2');
require('dotenv').config();
const db = require('../db');

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
}, {
  timestamps: true,
  underscored: true,
  freezeTableName: true,
  tableName: 'cj_user',
});

User.hashPassword = function(password) {
  return argon2.hash(password, process.env.SECRET);
}

module.exports = User;
