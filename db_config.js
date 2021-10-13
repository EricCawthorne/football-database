const { Pool } = require("pg");

const pool = new Pool({
user: process.env.DATABASE_USER, // TODO/EXAMPLE: REPLACED WITH PLACEHOLDER
database: process.env.DATABASE_NAME, // TODO: Replace process.env.DATABASE_NAME
password: process.env.DATABASE_PASSWORD, // TODO: Replace process.env.DATABASE_PASSWORD
port: process.env.DATABASE_PORT,
host: process.env.DATABASE_HOST,
  // connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;