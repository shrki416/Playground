const Pool = require("pg").Pool;

const pool = new Pool({
  user: "aa",
  password: "F2aTr6*rmYL*",
  host: "localhost",
  port: 5432,
  database: "jwttutorial",
});

module.exports = pool;
