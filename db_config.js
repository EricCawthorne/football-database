const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;