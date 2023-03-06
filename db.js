const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT2,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
})

module.exports = pool;
 