import Sequelize from 'sequelize';
import 'dotenv/config';

// using sequelize for ORM
const db = new Sequelize(process.env.DB_URL);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default db;
