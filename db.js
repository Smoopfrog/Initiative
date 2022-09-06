const { Pool } = require('pg');

const pool = new Pool ({
  host: "localhost",
  user: process.env.DB_USER,
  port: 5432,
  password: process.env.DB_PASSWORD,
  database: "initiative"
})

pool.query(`Select * from characters`, (err, res) => {
  if(!err) {
    console.log(res.rows);
  } else {
    console.log(err.message)
  }
  pool.end()
})