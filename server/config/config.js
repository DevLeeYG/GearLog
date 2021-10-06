require('dotenv').config(); 

module.exports = {
  "development": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": "gearlog",
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": "gearlog",
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": "gearlog",
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  }
}
