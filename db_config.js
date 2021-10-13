const { Pool } = require('pg');
const pool = new Pool({
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;