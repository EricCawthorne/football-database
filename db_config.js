const { Pool } = require('pg');
const connectionString = 'postgres://nrppmhyxsjjmzh:aa5bdd3ed9d3d4f0b730c348e234ec926e76d03d9fc9d0f7a027196571eab334@ec2-52-87-123-108.compute-1.amazonaws.com:5432/dbsnsjg5n2q55h'
const pool = new Pool({
  database: process.env.DATABASE_NAME,
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;