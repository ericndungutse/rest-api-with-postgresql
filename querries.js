const Pool = require("pg").Pool;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "eric",
  port: 5432,
});

module.exports = pool;
