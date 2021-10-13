const { Pool } = require('pg');
const pool = new Pool({
  database: process.env.DATABASE_NAME,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;